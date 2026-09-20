import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpuoa5b5u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpuoa5b5u"/>`,
		"fallback": "uiw:user-delete",
	});
}

export default Component;
