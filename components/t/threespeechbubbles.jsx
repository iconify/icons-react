import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-4ziq31h.css';
import '../../css/o/o7-5ytbma.css';
import '../../css/n/n2e31kbxj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-4ziq31h"/><path class="o7-5ytbma"/><path class="n2e31kbxj"/>`,
		"fallback": "fxemoji:threespeechbubbles",
	});
}

export default Component;
