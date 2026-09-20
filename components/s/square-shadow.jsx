import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcrgqg1rz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcrgqg1rz"/>`,
		"fallback": "vaadin:square-shadow",
	});
}

export default Component;
