import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3l-h4xfe.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3l-h4xfe"/>`,
		"fallback": "f7:speaker-fill",
	});
}

export default Component;
