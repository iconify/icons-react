import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9thxh5rn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9thxh5rn"/>`,
		"fallback": "rivet-icons:magnifying-glass",
	});
}

export default Component;
