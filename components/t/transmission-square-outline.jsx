import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whqk7pb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whqk7pb1x"/>`,
		"fallback": "solar:transmission-square-outline",
	});
}

export default Component;
