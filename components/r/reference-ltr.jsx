import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d74gefb2f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d74gefb2f"/>`,
		"fallback": "ooui:reference-ltr",
	});
}

export default Component;
