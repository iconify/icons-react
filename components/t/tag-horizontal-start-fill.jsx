import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asz75243e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="asz75243e"/>`,
		"fallback": "keyline-icons:tag-horizontal-start-fill",
	});
}

export default Component;
