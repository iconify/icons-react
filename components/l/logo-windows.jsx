import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8n63d11k.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8n63d11k"/>`,
		"fallback": "f7:logo-windows",
	});
}

export default Component;
