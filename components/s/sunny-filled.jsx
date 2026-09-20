import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3r-_0bnh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x3r-_0bnh"/>`,
		"fallback": "lsicon:sunny-filled",
	});
}

export default Component;
