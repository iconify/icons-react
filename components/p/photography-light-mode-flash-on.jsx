import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg_55xbyo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg_55xbyo"/>`,
		"fallback": "streamline-pixel:photography-light-mode-flash-on",
	});
}

export default Component;
