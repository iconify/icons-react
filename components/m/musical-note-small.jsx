import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em8j7dbzs.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em8j7dbzs"/>`,
		"fallback": "dinkie-icons:musical-note-small",
	});
}

export default Component;
