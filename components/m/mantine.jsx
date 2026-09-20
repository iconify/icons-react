import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f34s8ebdt.css';
import '../../css/y/yjtb2lbjg.css';
import '../../css/t/tld9dabbg.css';

const viewBox = {"width":163,"height":163};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f34s8ebdt"/><path class="yjtb2lbjg"/><path clip-rule="evenodd" class="tld9dabbg"/></g>`,
		"fallback": "thesvg-color:mantine",
	});
}

export default Component;
