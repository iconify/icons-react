import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh7m1x56q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh7m1x56q"/>`,
		"fallback": "solar:text-bold-broken",
	});
}

export default Component;
