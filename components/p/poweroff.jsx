import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do1c-8sjz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do1c-8sjz"/>`,
		"fallback": "uiw:poweroff",
	});
}

export default Component;
