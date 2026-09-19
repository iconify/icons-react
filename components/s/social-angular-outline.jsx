import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db5sjti-j.css';
import '../../css/m/mc7-3mbjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db5sjti-j"/><path class="mc7-3mbjc"/>`,
		"fallback": "ion:social-angular-outline",
	});
}

export default Component;
