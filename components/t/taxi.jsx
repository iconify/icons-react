import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3ppv4bho.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3ppv4bho"/>`,
		"fallback": "picon:taxi",
	});
}

export default Component;
