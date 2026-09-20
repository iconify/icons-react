import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vehn28bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vehn28bzm"/>`,
		"fallback": "mdi:sign-caution",
	});
}

export default Component;
