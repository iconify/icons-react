import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_4q0l3ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_4q0l3ua"/>`,
		"fallback": "noviair-light:router-x",
	});
}

export default Component;
