import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jolpr0egc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jolpr0egc"/>`,
		"fallback": "iconaut:parking-meter-solid",
	});
}

export default Component;
