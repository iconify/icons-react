import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmtc7c2_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hmtc7c2_e"/>`,
		"fallback": "iconoir:number-1-square-solid",
	});
}

export default Component;
