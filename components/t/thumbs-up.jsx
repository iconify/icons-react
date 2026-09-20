import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8wq1obhk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o8wq1obhk"/>`,
		"fallback": "oui:thumbs-up",
	});
}

export default Component;
