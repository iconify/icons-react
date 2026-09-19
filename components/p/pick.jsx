import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rj68qdc9s.css';
import '../../css/v/vnfr02q8c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rj68qdc9s"/><path class="vnfr02q8c"/></g>`,
		"fallback": "fluent-emoji-flat:pick",
	});
}

export default Component;
