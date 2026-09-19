import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0m9o7_sv.css';
import '../../css/q/q2_tjkl7x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k0m9o7_sv"/><path class="q2_tjkl7x"/></g>`,
		"fallback": "fluent-emoji-flat:pirate-flag",
	});
}

export default Component;
