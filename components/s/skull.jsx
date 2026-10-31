import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tlurdrb3p.css';
import '../../css/e/etpgz9bon.css';
import '../../css/v/vm6pr9bdj.css';
import '../../css/o/od6e1z5th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tlurdrb3p wm-shadow"/><path class="etpgz9bon wm-shadow"/><path class="vm6pr9bdj"/><path class="od6e1z5th"/></g>`,
		"fallback": "withicons-brutal:skull",
	});
}

export default Component;
