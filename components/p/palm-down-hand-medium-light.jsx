import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yugff8b7n.css';
import '../../css/p/ps2ge4bku.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yugff8b7n"/><path class="ps2ge4bku"/></g>`,
		"fallback": "fluent-emoji-flat:palm-down-hand-medium-light",
	});
}

export default Component;
