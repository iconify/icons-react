import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoqkcl5ra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoqkcl5ra"/>`,
		"fallback": "noviair-light:notebook-check",
	});
}

export default Component;
