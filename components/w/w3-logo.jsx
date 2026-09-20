import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glz0julzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glz0julzb"/>`,
		"fallback": "streamline-logos:w3-logo",
	});
}

export default Component;
