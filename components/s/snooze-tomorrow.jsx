import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbmeb0b8h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbmeb0b8h"/>`,
		"fallback": "quill:snooze-tomorrow",
	});
}

export default Component;
