import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn_rija9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tn_rija9r"/>`,
		"fallback": "streamline-logos:streamplay-logo-solid",
	});
}

export default Component;
