import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs_25ysim.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs_25ysim"/>`,
		"fallback": "f7:money-dollar",
	});
}

export default Component;
