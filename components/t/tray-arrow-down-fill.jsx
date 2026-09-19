import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jev2d4znk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jev2d4znk"/>`,
		"fallback": "f7:tray-arrow-down-fill",
	});
}

export default Component;
