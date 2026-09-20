import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9405_b9h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9405_b9h"/>`,
		"fallback": "pinhead:open-envelope-right",
	});
}

export default Component;
