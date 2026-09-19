import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i13rn9bvl.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i13rn9bvl"/>`,
		"fallback": "whh:sdvideo",
	});
}

export default Component;
