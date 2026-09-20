import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fosm35z7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fosm35z7h"/>`,
		"fallback": "streamline-ultimate:reward-stars-2",
	});
}

export default Component;
