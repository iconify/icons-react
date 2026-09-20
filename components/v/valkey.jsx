import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcj7e-b6r.css';

const viewBox = {"width":64,"height":73};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcj7e-b6r"/>`,
		"fallback": "thesvg-color:valkey",
	});
}

export default Component;
