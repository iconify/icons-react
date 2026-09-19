import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn9u4w0zp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn9u4w0zp"/>`,
		"fallback": "f7:map-pin-slash",
	});
}

export default Component;
