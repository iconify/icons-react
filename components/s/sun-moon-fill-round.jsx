import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xza8vabrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xza8vabrg"/>`,
		"fallback": "coolicons:sun-moon-fill-round",
	});
}

export default Component;
