import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkfjhxory.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkfjhxory"/>`,
		"fallback": "feather:maximize-2",
	});
}

export default Component;
