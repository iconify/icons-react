import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ho8fg47mx.css';
import '../../css/k/k5n0f6b0l.css';
import '../../css/u/ukw1o9bof.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ho8fg47mx"/><path clip-rule="evenodd" class="k5n0f6b0l"/><path class="ukw1o9bof"/></g>`,
		"fallback": "streamline-plump-color:video-subtitles-flat",
	});
}

export default Component;
