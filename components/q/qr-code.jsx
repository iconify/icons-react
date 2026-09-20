import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msncihl_r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msncihl_r"/>`,
		"fallback": "ooui:qr-code",
	});
}

export default Component;
