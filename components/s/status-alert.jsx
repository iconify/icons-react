import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceonq4b9c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ceonq4b9c"/>`,
		"fallback": "pajamas:status-alert",
	});
}

export default Component;
