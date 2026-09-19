import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/farh2acsw.css';
import '../../css/y/yqd33zb_e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="farh2acsw"/><path class="yqd33zb_e"/></g>`,
		"fallback": "fluent-emoji-flat:thumbs-up-medium-light",
	});
}

export default Component;
