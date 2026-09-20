import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv1tcd4jc.css';
import '../../css/c/crp5ew-_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv1tcd4jc"/><path class="crp5ew-_x"/>`,
		"fallback": "streamline-ultimate:skiing-snow-scooter-person-bold",
	});
}

export default Component;
