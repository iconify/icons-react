import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ila0mqwnd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ila0mqwnd"/>`,
		"fallback": "pinhead:sea-lion-and-question-mark",
	});
}

export default Component;
