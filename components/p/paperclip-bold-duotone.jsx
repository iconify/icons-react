import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2bnn7ohn.css';
import '../../css/j/jkdbh9btb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k2bnn7ohn"/><path class="jkdbh9btb"/>`,
		"fallback": "solar:paperclip-bold-duotone",
	});
}

export default Component;
