import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xamlhtb0r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xamlhtb0r"/>`,
		"fallback": "cib:intellijidea",
	});
}

export default Component;
