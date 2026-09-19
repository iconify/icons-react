import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/atapf5b1x.css';
import '../../css/n/ntfns8brg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="atapf5b1x"/><path class="ntfns8brg"/></g>`,
		"fallback": "fluent-emoji-flat:palm-up-hand",
	});
}

export default Component;
