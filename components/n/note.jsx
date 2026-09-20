import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxky71b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxky71b4c"/>`,
		"fallback": "thesvg-color:note",
	});
}

export default Component;
