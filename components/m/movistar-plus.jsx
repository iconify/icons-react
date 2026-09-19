import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4g5_ub0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4g5_ub0z"/>`,
		"fallback": "cbi:movistar-plus",
	});
}

export default Component;
