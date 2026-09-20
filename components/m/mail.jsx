import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p84b_2b8s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p84b_2b8s"/>`,
		"fallback": "uiw:mail",
	});
}

export default Component;
