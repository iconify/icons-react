import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clklwbbrf.css';
import '../../css/n/n91qcuztc.css';
import '../../css/a/awxrad2wk.css';
import '../../css/a/asy0_ebcz.css';
import '../../css/t/t74_hubqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="clklwbbrf"/><path class="n91qcuztc"/><path clip-rule="evenodd" class="awxrad2wk"/><path clip-rule="evenodd" class="asy0_ebcz"/><path class="t74_hubqw"/></g>`,
		"fallback": "icon-park:people-plus-one",
	});
}

export default Component;
