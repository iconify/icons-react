import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj5k6uu3i.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj5k6uu3i"/>`,
		"fallback": "fa6-solid:user-slash",
	});
}

export default Component;
