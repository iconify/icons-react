import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m35f2mb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m35f2mb-r"/>`,
		"fallback": "coolicons:scan-face-fill-round",
	});
}

export default Component;
