import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osbk2_69o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osbk2_69o"/>`,
		"fallback": "ion:social-whatsapp",
	});
}

export default Component;
