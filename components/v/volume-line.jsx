import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbkyh1b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbkyh1b7y"/>`,
		"fallback": "mingcute:volume-line",
	});
}

export default Component;
