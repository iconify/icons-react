import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-35otb0u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-35otb0u"/>`,
		"fallback": "fa7-solid:vials",
	});
}

export default Component;
