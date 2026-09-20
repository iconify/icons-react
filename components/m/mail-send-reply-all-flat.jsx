import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctg0mn-rs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ctg0mn-rs"/>`,
		"fallback": "streamline-color:mail-send-reply-all-flat",
	});
}

export default Component;
