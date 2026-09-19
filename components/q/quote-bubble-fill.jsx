import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_2q7uzrl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_2q7uzrl"/>`,
		"fallback": "f7:quote-bubble-fill",
	});
}

export default Component;
