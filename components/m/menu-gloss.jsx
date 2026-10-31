import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sprf0kjfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sprf0kjfo"/>`,
		"fallback": "withicons:menu-gloss",
	});
}

export default Component;
