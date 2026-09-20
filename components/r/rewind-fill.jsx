import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo9q5npwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo9q5npwd"/>`,
		"fallback": "ri:rewind-fill",
	});
}

export default Component;
