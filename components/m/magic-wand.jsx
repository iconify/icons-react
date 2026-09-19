import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7_kk0ivj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l7_kk0ivj"/>`,
		"fallback": "griddy-icons:magic-wand",
	});
}

export default Component;
