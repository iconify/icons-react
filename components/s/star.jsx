import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/waw7qsjhy.css';
import '../../css/w/w_3kc9fcd.css';
import '../../css/c/c00_5pbek.css';
import '../../css/f/fi_e0dgpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="waw7qsjhy wm-shadow"/><path class="w_3kc9fcd wm-shadow"/><path class="c00_5pbek"/><path class="fi_e0dgpm"/></g>`,
		"fallback": "withicons-brutal:star",
	});
}

export default Component;
