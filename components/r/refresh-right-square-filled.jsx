import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvmw99abz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvmw99abz"/>`,
		"fallback": "reicon:refresh-right-square-filled",
	});
}

export default Component;
