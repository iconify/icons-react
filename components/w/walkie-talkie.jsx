import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx85bbbhz.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx85bbbhz"/>`,
		"fallback": "fa6-solid:walkie-talkie",
	});
}

export default Component;
