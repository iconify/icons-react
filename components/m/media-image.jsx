import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fi-6_qg2a.css';
import '../../css/f/fbnt66b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fi-6_qg2a"/><path class="fbnt66b8o"/></g>`,
		"fallback": "iconoir:media-image",
	});
}

export default Component;
