import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylvmur2no.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ylvmur2no"/>`,
		"fallback": "lsicon:motorcycle-filled",
	});
}

export default Component;
