import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glh0c68sv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glh0c68sv"/>`,
		"fallback": "boxicons:vertical-align-top",
	});
}

export default Component;
