import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r15gej7bt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r15gej7bt"/>`,
		"fallback": "bi:menu-up",
	});
}

export default Component;
