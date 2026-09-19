import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxa6clbiu.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxa6clbiu"/>`,
		"fallback": "fa-solid:times",
	});
}

export default Component;
