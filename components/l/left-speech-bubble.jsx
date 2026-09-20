import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djj-rrvqc.css';
import '../../css/w/w3-ezh4fh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djj-rrvqc"/><path class="w3-ezh4fh"/>`,
		"fallback": "openmoji:left-speech-bubble",
	});
}

export default Component;
