import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7ie09byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7ie09byn"/>`,
		"fallback": "withicons:repeat-gloss",
	});
}

export default Component;
