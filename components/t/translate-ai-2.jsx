import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryi3-obbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryi3-obbh"/>`,
		"fallback": "ri:translate-ai-2",
	});
}

export default Component;
