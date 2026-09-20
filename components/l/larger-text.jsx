import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk4maq4cx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk4maq4cx"/>`,
		"fallback": "ooui:larger-text",
	});
}

export default Component;
