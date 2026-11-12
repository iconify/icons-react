import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuf-g2bwz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuf-g2bwz"/>`,
		"fallback": "selfhst:ollama-dark",
	});
}

export default Component;
