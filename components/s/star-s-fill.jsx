import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buyn88y-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buyn88y-a"/>`,
		"fallback": "ri:star-s-fill",
	});
}

export default Component;
