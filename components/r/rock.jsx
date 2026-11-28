import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs3j8ab6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs3j8ab6v"/>`,
		"fallback": "noviair:rock",
	});
}

export default Component;
