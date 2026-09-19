import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wckr9kb1z.css';
import '../../css/d/dc6nqvbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wckr9kb1z"/><path class="dc6nqvbuc"/>`,
		"fallback": "eva:radio-button-on-outline",
	});
}

export default Component;
