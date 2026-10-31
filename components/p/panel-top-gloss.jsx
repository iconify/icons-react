import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7ka5bc5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7ka5bc5t"/>`,
		"fallback": "withicons:panel-top-gloss",
	});
}

export default Component;
