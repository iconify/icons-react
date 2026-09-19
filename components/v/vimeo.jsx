import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td6uc1khz.css';

const viewBox = {"width":464,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td6uc1khz"/>`,
		"fallback": "ps:vimeo",
	});
}

export default Component;
