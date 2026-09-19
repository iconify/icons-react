import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8e93ct4v.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8e93ct4v"/>`,
		"fallback": "fontisto:transgender-alt",
	});
}

export default Component;
