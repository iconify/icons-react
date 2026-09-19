import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvi0ffils.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvi0ffils"/>`,
		"fallback": "bi:sign-turn-slight-left-fill",
	});
}

export default Component;
