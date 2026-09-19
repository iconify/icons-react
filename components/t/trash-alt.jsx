import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6r2z4_ya.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6r2z4_ya"/>`,
		"fallback": "fa-solid:trash-alt",
	});
}

export default Component;
