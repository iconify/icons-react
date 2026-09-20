import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa0z2b_vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa0z2b_vv"/>`,
		"fallback": "lucide:laptop",
	});
}

export default Component;
