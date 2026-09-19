import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puik6mbbn.css';
import '../../css/g/gko-8bc7z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="puik6mbbn"/><path class="gko-8bc7z"/></g>`,
		"fallback": "fluent-emoji-flat:right-anger-bubble",
	});
}

export default Component;
