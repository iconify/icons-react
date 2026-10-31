import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w_2bzzvcm.css';
import '../../css/b/b1ha8fr9z.css';
import '../../css/e/eog3h2gku.css';
import '../../css/e/e3f8hxfjb.css';
import '../../css/r/r1-rentmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="w_2bzzvcm wm-shadow"/><path class="b1ha8fr9z"/><path class="eog3h2gku"/><path class="e3f8hxfjb"/><path class="r1-rentmy"/></g>`,
		"fallback": "withicons-retro:paintbrush",
	});
}

export default Component;
