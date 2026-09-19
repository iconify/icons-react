import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whapzcc0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whapzcc0s"/>`,
		"fallback": "iconoir:number-3-square-solid",
	});
}

export default Component;
