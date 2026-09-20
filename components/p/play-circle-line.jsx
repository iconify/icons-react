import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iac8q5bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iac8q5bad"/>`,
		"fallback": "ri:play-circle-line",
	});
}

export default Component;
