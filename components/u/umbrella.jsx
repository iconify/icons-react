import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix_ay1bpr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix_ay1bpr"/>`,
		"fallback": "f7:umbrella",
	});
}

export default Component;
