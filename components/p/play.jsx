import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehxy3fbrt.css';

const viewBox = {"width":224,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehxy3fbrt"/>`,
		"fallback": "ps:play",
	});
}

export default Component;
