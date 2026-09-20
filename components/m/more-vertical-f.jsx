import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k96jtib1q.css';

const viewBox = {"width":24,"height":24,"left":-9,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k96jtib1q"/>`,
		"fallback": "jam:more-vertical-f",
	});
}

export default Component;
