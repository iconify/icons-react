import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgmga3btl.css';

const viewBox = {"width":666,"height":668};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgmga3btl"/>`,
		"fallback": "ls:tag",
	});
}

export default Component;
