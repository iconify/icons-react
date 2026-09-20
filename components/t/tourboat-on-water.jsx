import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcby5t82t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcby5t82t"/>`,
		"fallback": "pinhead:tourboat-on-water",
	});
}

export default Component;
