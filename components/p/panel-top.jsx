import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyv-pnb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyv-pnb4b"/>`,
		"fallback": "keyline-icons:panel-top",
	});
}

export default Component;
