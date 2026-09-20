import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb4rv0hxu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb4rv0hxu"/>`,
		"fallback": "lsicon:uploading-filled",
	});
}

export default Component;
