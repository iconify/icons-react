import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es1ac2bza.css';

const viewBox = {"width":36,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es1ac2bza"/>`,
		"fallback": "thesvg:sigma-computing",
	});
}

export default Component;
