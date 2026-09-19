import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwsf85b9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwsf85b9o"/>`,
		"fallback": "fa-solid:search-minus",
	});
}

export default Component;
