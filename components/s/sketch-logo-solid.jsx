import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8s4vkb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o8s4vkb9p"/>`,
		"fallback": "streamline-logos:sketch-logo-solid",
	});
}

export default Component;
