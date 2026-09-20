import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hza_l0bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hza_l0bqe"/>`,
		"fallback": "ri:sticky-note-line",
	});
}

export default Component;
