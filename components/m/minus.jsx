import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt694xk1d.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt694xk1d"/>`,
		"fallback": "topcoat:minus",
	});
}

export default Component;
