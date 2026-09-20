import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly42ygbuw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly42ygbuw"/>`,
		"fallback": "material-icon-theme:moon",
	});
}

export default Component;
