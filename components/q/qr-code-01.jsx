import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmz_-_bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmz_-_bep"/>`,
		"fallback": "hugeicons:qr-code-01",
	});
}

export default Component;
