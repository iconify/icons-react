import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2a8hqbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2a8hqbwc"/>`,
		"fallback": "coolicons:user-voice-fill-round",
	});
}

export default Component;
