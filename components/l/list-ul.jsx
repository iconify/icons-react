import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4u7xkbfr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4u7xkbfr"/>`,
		"fallback": "fa6-solid:list-ul",
	});
}

export default Component;
