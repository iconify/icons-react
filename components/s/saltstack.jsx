import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8cl6ubas.css';

const viewBox = {"width":500,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8cl6ubas"/>`,
		"fallback": "file-icons:saltstack",
	});
}

export default Component;
