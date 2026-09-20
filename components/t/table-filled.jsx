import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faip4u5ju.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="faip4u5ju"/>`,
		"fallback": "lsicon:table-filled",
	});
}

export default Component;
