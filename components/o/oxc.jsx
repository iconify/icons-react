import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu03a2h3p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu03a2h3p"/>`,
		"fallback": "material-icon-theme:oxc",
	});
}

export default Component;
