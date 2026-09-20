import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwy0d1dqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwy0d1dqm"/>`,
		"fallback": "thesvg-color:spring-security",
	});
}

export default Component;
