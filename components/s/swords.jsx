import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tv_dh211h.css';
import '../../css/c/cgh4wkbad.css';
import '../../css/h/hzic4hbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tv_dh211h wm-shadow"/><path class="cgh4wkbad wm-shadow"/><path class="hzic4hbnk"/></g>`,
		"fallback": "withicons-brutal:swords",
	});
}

export default Component;
