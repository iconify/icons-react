import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqx5n1fdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqx5n1fdy"/>`,
		"fallback": "mynaui:letter-k-octagon",
	});
}

export default Component;
