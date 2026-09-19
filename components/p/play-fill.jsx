import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkx8j0z4h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkx8j0z4h"/>`,
		"fallback": "bi:play-fill",
	});
}

export default Component;
