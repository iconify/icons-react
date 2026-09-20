import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-cyjnb0l.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-cyjnb0l"/>`,
		"fallback": "wi:owm-day-621",
	});
}

export default Component;
