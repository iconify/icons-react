import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d67njf0pn.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d67njf0pn"/>`,
		"fallback": "thesvg-color:openfeature-dark",
	});
}

export default Component;
