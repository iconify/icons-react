import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew1qhpbly.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew1qhpbly"/>`,
		"fallback": "material-icon-theme:nodemon",
	});
}

export default Component;
