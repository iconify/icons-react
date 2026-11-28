import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb2b7xbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary wb2b7xbau"/>`,
		"fallback": "iconaut:waveform-duotone",
	});
}

export default Component;
