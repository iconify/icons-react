import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsmw1fyuu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tsmw1fyuu"/>`,
		"fallback": "lsicon:rail-filled",
	});
}

export default Component;
