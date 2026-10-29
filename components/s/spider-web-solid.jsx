import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh24xeqxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh24xeqxi"/>`,
		"fallback": "withicons:spider-web-solid",
	});
}

export default Component;
