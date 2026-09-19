import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgcb9zw2l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgcb9zw2l"/>`,
		"fallback": "at-icons:pointer-down",
	});
}

export default Component;
