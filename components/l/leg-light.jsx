import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3ftalbsn.css';
import '../../css/r/rl7susbdk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h3ftalbsn"/><path class="rl7susbdk"/></g>`,
		"fallback": "fluent-emoji-flat:leg-light",
	});
}

export default Component;
