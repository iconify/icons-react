import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej8dilp1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej8dilp1k"/>`,
		"fallback": "hugeicons:traffic-cone",
	});
}

export default Component;
