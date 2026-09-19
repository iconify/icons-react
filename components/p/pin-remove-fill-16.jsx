import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egzvq3_2v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egzvq3_2v"/>`,
		"fallback": "garden:pin-remove-fill-16",
	});
}

export default Component;
