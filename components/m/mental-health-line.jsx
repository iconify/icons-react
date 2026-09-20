import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnyn49jdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnyn49jdo"/>`,
		"fallback": "ri:mental-health-line",
	});
}

export default Component;
