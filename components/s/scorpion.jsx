import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgn50-j5m.css';
import '../../css/n/nx-9cinea.css';
import '../../css/a/a6r1geblx.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/uwe5-db5o.css';
import '../../css/p/p5t05ibft.css';
import '../../css/p/pf9v1kalj.css';
import '../../css/y/ye4xqfc6m.css';
import '../../css/c/c4_grnd8d.css';
import '../../css/n/no081tj2j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgn50-j5m"/><path class="nx-9cinea"/><path class="a6r1geblx"/><g class="ij2x_72vy"><path class="uwe5-db5o"/><path class="p5t05ibft"/><path class="pf9v1kalj"/><path class="ye4xqfc6m"/><path class="c4_grnd8d"/><path class="no081tj2j"/></g>`,
		"fallback": "openmoji:scorpion",
	});
}

export default Component;
