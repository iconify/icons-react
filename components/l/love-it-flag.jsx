import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sohp0gpwr.css';
import '../../css/w/wjtzymbba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sohp0gpwr"/><path class="wjtzymbba"/></g>`,
		"fallback": "streamline-ultimate:love-it-flag",
	});
}

export default Component;
