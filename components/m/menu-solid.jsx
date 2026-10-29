import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b88urv4zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b88urv4zn"/>`,
		"fallback": "withicons:menu-solid",
	});
}

export default Component;
