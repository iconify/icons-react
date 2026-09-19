import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1rz7qbma.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1rz7qbma"/>`,
		"fallback": "carbon:user-access-unlocked",
	});
}

export default Component;
