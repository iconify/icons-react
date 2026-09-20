import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovw7vo7fo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovw7vo7fo"/>`,
		"fallback": "uil:shield-exclamation",
	});
}

export default Component;
