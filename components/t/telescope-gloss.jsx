import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhoe5vyjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhoe5vyjx"/>`,
		"fallback": "withicons:telescope-gloss",
	});
}

export default Component;
