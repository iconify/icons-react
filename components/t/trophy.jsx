import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2d9a-f-z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2d9a-f-z"/>`,
		"fallback": "pinhead:trophy",
	});
}

export default Component;
