import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbnvyovvy.css';
import '../../css/r/rimayqb3b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wbnvyovvy"/><path class="rimayqb3b"/></g>`,
		"fallback": "fluent-emoji-flat:palm-up-hand-medium-dark",
	});
}

export default Component;
