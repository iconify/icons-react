import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy2m2ubdb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy2m2ubdb"/>`,
		"fallback": "material-icon-theme:rust",
	});
}

export default Component;
