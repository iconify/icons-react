import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7pacpt3h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7pacpt3h"/>`,
		"fallback": "cib:scala",
	});
}

export default Component;
