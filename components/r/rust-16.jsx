import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe2qv6oon.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe2qv6oon"/>`,
		"fallback": "nonicons:rust-16",
	});
}

export default Component;
