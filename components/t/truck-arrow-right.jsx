import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g48g4ob_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g48g4ob_p"/>`,
		"fallback": "keyline-icons:truck-arrow-right",
	});
}

export default Component;
