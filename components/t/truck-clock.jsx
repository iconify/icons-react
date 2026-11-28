import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/memn6_fup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="memn6_fup"/>`,
		"fallback": "noviair:truck-clock",
	});
}

export default Component;
