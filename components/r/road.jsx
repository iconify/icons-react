import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or8ik4b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or8ik4b5r"/>`,
		"fallback": "tabler:road",
	});
}

export default Component;
