import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey-yjdb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey-yjdb6r"/>`,
		"fallback": "cbi:marstek-venus-e-gen2",
	});
}

export default Component;
