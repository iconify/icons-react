import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frxx8dk-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frxx8dk-s"/>`,
		"fallback": "hugeicons:stamp-01",
	});
}

export default Component;
