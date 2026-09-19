import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4b02zbhe.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4b02zbhe"/>`,
		"fallback": "f7:quote-bubble",
	});
}

export default Component;
