import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vat3ri6pw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vat3ri6pw"/>`,
		"fallback": "fa6-solid:note-sticky",
	});
}

export default Component;
