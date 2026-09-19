import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zhpcxnv_f.css';
import '../../css/u/u3zv7hbgk.css';
import '../../css/s/sldujvbwa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zhpcxnv_f"/><path class="u3zv7hbgk"/><path class="sldujvbwa"/></g>`,
		"fallback": "fluent-emoji-flat:prayer-beads",
	});
}

export default Component;
