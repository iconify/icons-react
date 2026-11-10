import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj2vq8bez.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xj2vq8bez"/>`,
		"fallback": "at-icons:minus-in-circle",
	});
}

export default Component;
