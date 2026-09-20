import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vin-r_b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vin-r_b3e"/>`,
		"fallback": "ri:share-forward-line",
	});
}

export default Component;
