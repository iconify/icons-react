import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe2q5pf1u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe2q5pf1u"/>`,
		"fallback": "at-icons:sign-post",
	});
}

export default Component;
