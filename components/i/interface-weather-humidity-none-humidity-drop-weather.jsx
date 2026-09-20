import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2n_mllgr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2n_mllgr"/>`,
		"fallback": "streamline:interface-weather-humidity-none-humidity-drop-weather",
	});
}

export default Component;
