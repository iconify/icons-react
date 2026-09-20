import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqr4w3gel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqr4w3gel"/>`,
		"fallback": "mdi:numeric-nine-box-outline",
	});
}

export default Component;
