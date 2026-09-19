import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvsvn_42u.css';

const viewBox = {"width":650,"height":750};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvsvn_42u"/>`,
		"fallback": "il:menu",
	});
}

export default Component;
