import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fono4sb0u.css';
import '../../css/g/glfu-ulem.css';
import '../../css/j/jn3ayb5ag.css';
import '../../css/w/w5qn3c7ko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="fono4sb0u wm-shadow"/><path class="glfu-ulem wm-shadow"/><path class="jn3ayb5ag"/><path class="w5qn3c7ko"/></g>`,
		"fallback": "withicons-brutal:log-in",
	});
}

export default Component;
