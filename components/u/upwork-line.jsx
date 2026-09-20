import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjm_bibby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjm_bibby"/>`,
		"fallback": "ri:upwork-line",
	});
}

export default Component;
