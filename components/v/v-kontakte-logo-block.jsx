import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhb07vwbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dhb07vwbb"/>`,
		"fallback": "streamline-logos:v-kontakte-logo-block",
	});
}

export default Component;
