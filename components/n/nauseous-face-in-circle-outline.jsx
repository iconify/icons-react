import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh1supfsd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh1supfsd"/>`,
		"fallback": "pinhead:nauseous-face-in-circle-outline",
	});
}

export default Component;
