import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q0q3_db9v.css';
import '../../css/z/z9_ovrbwf.css';
import '../../css/c/c7xazyb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q0q3_db9v"/><path clip-rule="evenodd" class="z9_ovrbwf"/><path class="c7xazyb5c"/></g>`,
		"fallback": "iconoir:password-cursor",
	});
}

export default Component;
