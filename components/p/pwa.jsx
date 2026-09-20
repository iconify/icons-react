import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl-lz1bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl-lz1bih"/>`,
		"fallback": "thesvg-color:pwa",
	});
}

export default Component;
