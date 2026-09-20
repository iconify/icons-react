import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/k1g07dbri.css';
import '../../css/x/xku__bb_n.css';
import '../../css/j/j15hc4biq.css';
import '../../css/s/sc6lftqsd.css';
import '../../css/y/y0oqz1bau.css';
import '../../css/h/hpcdq09vd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ij2x_72vy"><path class="k1g07dbri"/><path class="xku__bb_n"/></g><path class="j15hc4biq"/><path class="sc6lftqsd"/><path class="y0oqz1bau"/><path class="hpcdq09vd"/>`,
		"fallback": "openmoji:stop-sign",
	});
}

export default Component;
