import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpeweo4gr.css';
import '../../css/h/hl2ro6kwn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpeweo4gr"/><path class="hl2ro6kwn"/>`,
		"fallback": "streamline-pixel:technology-robot-ai-signal-2",
	});
}

export default Component;
