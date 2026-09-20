import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwh6emb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwh6emb2x"/>`,
		"fallback": "mdi:surround-sound-3-1",
	});
}

export default Component;
