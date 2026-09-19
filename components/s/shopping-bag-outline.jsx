import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk4yqnh0p.css';
import '../../css/m/m9tv2wbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk4yqnh0p"/><path class="m9tv2wbji"/>`,
		"fallback": "eva:shopping-bag-outline",
	});
}

export default Component;
