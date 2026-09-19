import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t71jnss5u.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t71jnss5u"/>`,
		"fallback": "fa-solid:plus-square",
	});
}

export default Component;
