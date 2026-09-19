import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3-dqm56q.css';
import '../../css/v/vyytf6x5t.css';
import '../../css/s/sugscdbww.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j3-dqm56q"/><path class="vyytf6x5t"/><path class="sugscdbww"/></g>`,
		"fallback": "fluent-emoji-flat:palms-up-together-medium",
	});
}

export default Component;
