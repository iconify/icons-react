import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3lxracrw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3lxracrw"/>`,
		"fallback": "fa6-solid:user-secret",
	});
}

export default Component;
