import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs1z3_bnz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs1z3_bnz"/>`,
		"fallback": "rivet-icons:user-remove",
	});
}

export default Component;
