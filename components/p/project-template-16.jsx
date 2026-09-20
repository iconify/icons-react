import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teorf6boz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teorf6boz"/>`,
		"fallback": "octicon:project-template-16",
	});
}

export default Component;
