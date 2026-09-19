import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7lf6sb7u.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7lf6sb7u"/>`,
		"fallback": "fa-brands:pinterest",
	});
}

export default Component;
