import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc1jzc-4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc1jzc-4u"/>`,
		"fallback": "sidekickicons:outdent-16-solid",
	});
}

export default Component;
