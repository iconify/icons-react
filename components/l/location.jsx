import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/d/d-8w03bro.css';
import '../../css/h/hrjfpsb2u.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(4 2)" class="jtowsomii"><path class="d-8w03bro"/><circle class="hrjfpsb2u"/></g>`,
		"fallback": "system-uicons:location",
	});
}

export default Component;
