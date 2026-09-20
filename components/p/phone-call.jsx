import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr3ccxb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr3ccxb9k"/>`,
		"fallback": "pixelarticons:phone-call",
	});
}

export default Component;
