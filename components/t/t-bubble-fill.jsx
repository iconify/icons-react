import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuhbexp4l.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuhbexp4l"/>`,
		"fallback": "f7:t-bubble-fill",
	});
}

export default Component;
