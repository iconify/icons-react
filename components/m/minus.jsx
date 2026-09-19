import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inivexboa.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inivexboa"/>`,
		"fallback": "f7:minus",
	});
}

export default Component;
