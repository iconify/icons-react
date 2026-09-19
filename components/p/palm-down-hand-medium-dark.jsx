import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/no25s2bev.css';
import '../../css/h/hgmvy7bpm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="no25s2bev"/><path class="hgmvy7bpm"/></g>`,
		"fallback": "fluent-emoji-flat:palm-down-hand-medium-dark",
	});
}

export default Component;
