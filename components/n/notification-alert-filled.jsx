import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/polv4dizi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="polv4dizi"/>`,
		"fallback": "griddy-icons:notification-alert-filled",
	});
}

export default Component;
