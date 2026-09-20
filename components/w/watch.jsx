import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbcxezbmh.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbcxezbmh"/>`,
		"fallback": "jam:watch",
	});
}

export default Component;
