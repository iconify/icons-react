import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnet0zdkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnet0zdkl"/>`,
		"fallback": "boxicons:menorah-filled",
	});
}

export default Component;
