import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5s4bo5vb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k5s4bo5vb"/>`,
		"fallback": "streamline-logos:obs-studio-logo-block",
	});
}

export default Component;
