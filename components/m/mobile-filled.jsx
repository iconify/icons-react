import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6aaq_a1w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x6aaq_a1w"/>`,
		"fallback": "lsicon:mobile-filled",
	});
}

export default Component;
