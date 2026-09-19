import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2_og-bwr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2_og-bwr"/>`,
		"fallback": "bi:telephone-inbound",
	});
}

export default Component;
