import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou25alb_r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou25alb_r"/>`,
		"fallback": "qlementine-icons:mp3-16",
	});
}

export default Component;
