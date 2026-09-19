import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvtmg0bps.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvtmg0bps"/>`,
		"fallback": "codicon:voice-mode-download-compact",
	});
}

export default Component;
