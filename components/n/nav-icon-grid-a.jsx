import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvko1jboh.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvko1jboh"/>`,
		"fallback": "fontisto:nav-icon-grid-a",
	});
}

export default Component;
