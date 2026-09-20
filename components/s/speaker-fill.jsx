import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tugg-6crg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tugg-6crg"/>`,
		"fallback": "ri:speaker-fill",
	});
}

export default Component;
