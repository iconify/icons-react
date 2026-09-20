import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf8y8l98m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf8y8l98m"/>`,
		"fallback": "streamline-ultimate:settings-slider-desktop-horizontal-bold",
	});
}

export default Component;
