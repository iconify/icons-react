import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbhel3d9u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbhel3d9u"/>`,
		"fallback": "carbon:tsunami",
	});
}

export default Component;
