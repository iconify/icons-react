import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzv8w_bxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzv8w_bxp"/>`,
		"fallback": "cbi:snes",
	});
}

export default Component;
