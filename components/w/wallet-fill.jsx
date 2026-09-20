import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubk5lxb9k.css';
import '../../css/l/l8nart8of.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubk5lxb9k"/><path clip-rule="evenodd" class="l8nart8of"/>`,
		"fallback": "si:wallet-fill",
	});
}

export default Component;
