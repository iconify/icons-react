import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/she6g5bum.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="she6g5bum"/>`,
		"fallback": "uiw:up",
	});
}

export default Component;
