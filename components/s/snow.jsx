import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzc7i60gn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzc7i60gn"/>`,
		"fallback": "fontisto:snow",
	});
}

export default Component;
