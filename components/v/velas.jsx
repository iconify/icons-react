import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vef-vgb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vef-vgb4f"/>`,
		"fallback": "token:velas",
	});
}

export default Component;
