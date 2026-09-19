import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nppc4ldyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nppc4ldyb"/>`,
		"fallback": "boxicons:refresh-cw-filled",
	});
}

export default Component;
