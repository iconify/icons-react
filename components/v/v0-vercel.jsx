import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klivdsb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="klivdsb-w"/>`,
		"fallback": "thesvg-color:v0-vercel",
	});
}

export default Component;
