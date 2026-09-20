import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_b9ttbfs.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-4.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_b9ttbfs"/>`,
		"fallback": "jam:plus",
	});
}

export default Component;
