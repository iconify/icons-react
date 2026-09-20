import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wlteh9bxn.css';
import '../../css/b/blhx95bup.css';
import '../../css/o/orzu1it2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wlteh9bxn"/><path class="blhx95bup"/><path class="orzu1it2s"/></g>`,
		"fallback": "tdesign:popsicle",
	});
}

export default Component;
