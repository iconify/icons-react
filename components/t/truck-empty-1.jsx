import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/su8n_0nuw.css';
import '../../css/u/uxmrwmbam.css';
import '../../css/q/qygxjk77z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="su8n_0nuw"/><path class="uxmrwmbam"/><path class="qygxjk77z"/></g>`,
		"fallback": "streamline-ultimate:truck-empty-1",
	});
}

export default Component;
