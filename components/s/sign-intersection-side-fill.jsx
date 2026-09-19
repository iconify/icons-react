import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_vt4xbfx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_vt4xbfx"/>`,
		"fallback": "bi:sign-intersection-side-fill",
	});
}

export default Component;
