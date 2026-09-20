import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fid1iybje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fid1iybje"/>`,
		"fallback": "ri:scroll-to-bottom-line",
	});
}

export default Component;
