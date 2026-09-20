import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yytd03pef.css';
import '../../css/g/giadiac_x.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/n/n9o5dpb9y.css';
import '../../css/c/cnv0mofjz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yytd03pef"/><path class="giadiac_x"/><g class="ij2x_72vy"><path class="n9o5dpb9y"/><path class="cnv0mofjz"/></g>`,
		"fallback": "openmoji:swipe-up",
	});
}

export default Component;
