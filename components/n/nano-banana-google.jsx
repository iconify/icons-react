import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjm9s1b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjm9s1b5z"/>`,
		"fallback": "thesvg:nano-banana-google",
	});
}

export default Component;
