import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkz0r345s.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkz0r345s"/>`,
		"fallback": "fa-solid:skiing-nordic",
	});
}

export default Component;
