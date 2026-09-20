import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzymo3a0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzymo3a0b"/>`,
		"fallback": "ri:roadster-line",
	});
}

export default Component;
