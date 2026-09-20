import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvq731b7p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvq731b7p"/>`,
		"fallback": "selfhst:planning-center-calendar-light",
	});
}

export default Component;
