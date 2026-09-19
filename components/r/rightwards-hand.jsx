import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6xpmbbll.css';
import '../../css/l/louoz68-v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6xpmbbll"/><path clip-rule="evenodd" class="louoz68-v"/></g>`,
		"fallback": "fluent-emoji-flat:rightwards-hand",
	});
}

export default Component;
