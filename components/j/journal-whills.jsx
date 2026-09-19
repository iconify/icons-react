import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mipg4xb5y.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mipg4xb5y"/>`,
		"fallback": "fa-solid:journal-whills",
	});
}

export default Component;
