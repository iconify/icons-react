import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj2nbbceu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj2nbbceu"/>`,
		"fallback": "uiw:reddit",
	});
}

export default Component;
