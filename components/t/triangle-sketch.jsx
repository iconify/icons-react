import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aswhmfbgj.css';
import '../../css/z/z5ah4rbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="aswhmfbgj"/><path class="z5ah4rbvh"/></g>`,
		"fallback": "withicons:triangle-sketch",
	});
}

export default Component;
