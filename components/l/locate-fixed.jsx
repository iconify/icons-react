import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rawx_4jhd.css';
import '../../css/t/tu0nkzb6s.css';
import '../../css/f/f-0oyn0so.css';
import '../../css/w/wsyyr6xai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rawx_4jhd wm-shadow"/><path class="tu0nkzb6s wm-shadow"/><path class="f-0oyn0so"/><path class="wsyyr6xai"/></g>`,
		"fallback": "withicons-brutal:locate-fixed",
	});
}

export default Component;
