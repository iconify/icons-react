import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0w1l3idh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0w1l3idh"/>`,
		"fallback": "tabler:layout-align-top-filled",
	});
}

export default Component;
