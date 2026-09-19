import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvbu6bbpg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvbu6bbpg"/>`,
		"fallback": "codicon:voice-mode-compact",
	});
}

export default Component;
