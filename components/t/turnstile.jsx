import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg4uccb5e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg4uccb5e"/>`,
		"fallback": "roentgen:turnstile",
	});
}

export default Component;
