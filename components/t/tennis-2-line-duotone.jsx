import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lij0o13-b.css';
import '../../css/w/wcaar9b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lij0o13-b"/><path class="wcaar9b5b"/></g>`,
		"fallback": "solar:tennis-2-line-duotone",
	});
}

export default Component;
