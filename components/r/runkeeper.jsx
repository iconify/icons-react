import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flnsk_y9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flnsk_y9r"/>`,
		"fallback": "thesvg-color:runkeeper",
	});
}

export default Component;
