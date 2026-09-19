import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvp85bpbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mvp85bpbd"/>`,
		"fallback": "griddy-icons:interactive-voice-response",
	});
}

export default Component;
