import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvu_d8b-v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvu_d8b-v"/>`,
		"fallback": "fa-solid:pen",
	});
}

export default Component;
