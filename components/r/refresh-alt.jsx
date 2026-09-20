import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/a/apkg3mbvy.css';
import '../../css/o/opiftm88q.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="apkg3mbvy"/><path class="opiftm88q"/></g>`,
		"fallback": "system-uicons:refresh-alt",
	});
}

export default Component;
