import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn9grkqjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn9grkqjy"/>`,
		"fallback": "coolicons:microphone-off-fill-round",
	});
}

export default Component;
