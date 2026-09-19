import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xiq4noa1t.css';
import '../../css/m/m4czkkbbp.css';
import '../../css/q/q0opk4i9x.css';
import '../../css/w/w-4p4tpyk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xiq4noa1t"/><path class="m4czkkbbp"/><path class="q0opk4i9x"/><path class="w-4p4tpyk"/></g>`,
		"fallback": "fluent-emoji-flat:water-pistol",
	});
}

export default Component;
