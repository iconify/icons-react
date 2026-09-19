import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es1ty5o-q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es1ty5o-q"/>`,
		"fallback": "cib:medium-m",
	});
}

export default Component;
