import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yia2llbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yia2llbra"/>`,
		"fallback": "thesvg-color:opennebula",
	});
}

export default Component;
