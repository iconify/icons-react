import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxo0fvbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxo0fvbxa"/>`,
		"fallback": "withicons:redo-gloss",
	});
}

export default Component;
