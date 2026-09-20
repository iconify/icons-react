import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p69xj7f-e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p69xj7f-e"/>`,
		"fallback": "uiw:user",
	});
}

export default Component;
