import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqg43f7sp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqg43f7sp"/>`,
		"fallback": "la:sad-tear",
	});
}

export default Component;
