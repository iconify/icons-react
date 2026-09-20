import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrm3k6bil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrm3k6bil"/>`,
		"fallback": "thesvg-color:mock-service-worker",
	});
}

export default Component;
