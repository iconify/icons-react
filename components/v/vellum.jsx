import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm9k5wb9r.css';

const viewBox = {"width":174,"height":53};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm9k5wb9r"/>`,
		"fallback": "thesvg-color:vellum",
	});
}

export default Component;
