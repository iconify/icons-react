import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9ny_92rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9ny_92rd"/>`,
		"fallback": "ri:reddit-fill",
	});
}

export default Component;
