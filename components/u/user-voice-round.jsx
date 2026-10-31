import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4187fbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4187fbbw"/>`,
		"fallback": "coolicons:user-voice-round",
	});
}

export default Component;
