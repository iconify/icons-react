import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/ur3vzyb7h.css';
import '../../css/n/ndo8e3jvz.css';
import '../../css/j/jty3hzbzs.css';
import '../../css/c/c3_i8_3rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ur3vzyb7h wm-shadow"/><path class="ndo8e3jvz wm-shadow"/><path class="jty3hzbzs"/><path class="c3_i8_3rt"/></g>`,
		"fallback": "withicons-brutal:menu",
	});
}

export default Component;
