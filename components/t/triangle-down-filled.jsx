import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs8hqxbve.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fs8hqxbve"/>`,
		"fallback": "lsicon:triangle-down-filled",
	});
}

export default Component;
