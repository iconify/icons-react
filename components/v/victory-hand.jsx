import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ns7o-qh9w.css';
import '../../css/l/l0in6gyyt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ns7o-qh9w"/><path class="l0in6gyyt"/></g>`,
		"fallback": "fluent-emoji-flat:victory-hand",
	});
}

export default Component;
