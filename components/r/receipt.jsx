import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqn-v9b7h.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqn-v9b7h"/>`,
		"fallback": "fa6-solid:receipt",
	});
}

export default Component;
