import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp_h_acca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp_h_acca"/>`,
		"fallback": "cbi:snapcast",
	});
}

export default Component;
