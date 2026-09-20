import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwnt3j9zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwnt3j9zx"/>`,
		"fallback": "thesvg-color:myob",
	});
}

export default Component;
