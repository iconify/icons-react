import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgyjh9bcd.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgyjh9bcd"/>`,
		"fallback": "fa6-solid:joint",
	});
}

export default Component;
