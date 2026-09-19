import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm50qmdzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sm50qmdzn"/>`,
		"fallback": "iconoir:number-7-square-solid",
	});
}

export default Component;
