import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw2wlh8tg.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw2wlh8tg"/>`,
		"fallback": "zmdi:toll",
	});
}

export default Component;
