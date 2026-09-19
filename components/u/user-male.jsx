import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt7bghb4u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt7bghb4u"/>`,
		"fallback": "icons8:user-male",
	});
}

export default Component;
