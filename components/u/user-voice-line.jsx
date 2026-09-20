import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iac76_0qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iac76_0qa"/>`,
		"fallback": "ri:user-voice-line",
	});
}

export default Component;
