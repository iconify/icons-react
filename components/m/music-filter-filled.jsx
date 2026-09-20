import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0eyaubll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0eyaubll"/>`,
		"fallback": "reicon:music-filter-filled",
	});
}

export default Component;
