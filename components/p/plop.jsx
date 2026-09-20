import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdz8q2beh.css';

const viewBox = {"width":250,"height":250};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gdz8q2beh"/>`,
		"fallback": "material-icon-theme:plop",
	});
}

export default Component;
