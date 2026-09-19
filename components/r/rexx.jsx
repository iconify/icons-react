import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-06l_p3j.css';

const viewBox = {"width":353,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-06l_p3j"/>`,
		"fallback": "file-icons:rexx",
	});
}

export default Component;
