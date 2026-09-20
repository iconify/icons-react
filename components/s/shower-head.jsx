import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgrym0icu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgrym0icu"/>`,
		"fallback": "mdi:shower-head",
	});
}

export default Component;
