import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jju9kab-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jju9kab-u"/>`,
		"fallback": "noviair:trash-check",
	});
}

export default Component;
