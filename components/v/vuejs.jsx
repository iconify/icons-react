import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-7uwvhns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-7uwvhns"/>`,
		"fallback": "lineicons:vuejs",
	});
}

export default Component;
