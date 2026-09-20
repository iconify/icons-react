import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ycec_vboe.css';
import '../../css/c/cir3qxuka.css';
import '../../css/h/h8ynaxe7w.css';

const viewBox = {"width":933,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGet6hIbve)"><g clip-path="url(#SVG8IscwcLq)"><path clip-rule="evenodd" class="ycec_vboe"/></g></g><defs><clipPath id="SVGet6hIbve"><path class="cir3qxuka"/></clipPath><clipPath id="SVG8IscwcLq"><path class="h8ynaxe7w"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:kick-light",
	});
}

export default Component;
