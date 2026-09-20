import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veidlab1w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="veidlab1w"/>`,
		"fallback": "qlementine-icons:screwdriver-16",
	});
}

export default Component;
