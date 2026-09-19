import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2mwc6apt.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2mwc6apt"/>`,
		"fallback": "fa-solid:joint",
	});
}

export default Component;
