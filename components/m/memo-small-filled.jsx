import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akb6c-68i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akb6c-68i"/>`,
		"fallback": "dinkie-icons:memo-small-filled",
	});
}

export default Component;
