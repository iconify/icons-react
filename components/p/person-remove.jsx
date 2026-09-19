import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-21c-j5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-21c-j5i"/>`,
		"fallback": "famicons:person-remove",
	});
}

export default Component;
