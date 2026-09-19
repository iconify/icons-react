import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v76w70e2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v76w70e2q"/>`,
		"fallback": "boxicons:route",
	});
}

export default Component;
