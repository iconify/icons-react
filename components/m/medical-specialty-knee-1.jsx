import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e33bsjk-z.css';
import '../../css/w/w9f5wmlsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e33bsjk-z"/><path class="w9f5wmlsk"/></g>`,
		"fallback": "streamline-ultimate:medical-specialty-knee-1",
	});
}

export default Component;
