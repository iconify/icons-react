import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkmdx5b_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkmdx5b_h"/>`,
		"fallback": "at-icons:swords",
	});
}

export default Component;
