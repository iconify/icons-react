import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajr6vqxuu.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajr6vqxuu"/>`,
		"fallback": "fa6-solid:mars-double",
	});
}

export default Component;
