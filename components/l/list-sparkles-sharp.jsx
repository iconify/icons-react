import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j-y4i4biy.css';
import '../../css/y/yqe6_cdnh.css';
import '../../css/m/mf_m6jlzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="j-y4i4biy"/><path class="yqe6_cdnh"/><path class="mf_m6jlzc"/></g>`,
		"fallback": "keyline-icons:list-sparkles-sharp",
	});
}

export default Component;
