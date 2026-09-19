import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-3c8_piw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-3c8_piw"/>`,
		"fallback": "gridicons:tablet",
	});
}

export default Component;
