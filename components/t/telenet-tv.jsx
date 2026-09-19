import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgqgi3exg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgqgi3exg"/>`,
		"fallback": "cbi:telenet-tv",
	});
}

export default Component;
