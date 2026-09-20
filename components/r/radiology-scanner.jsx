import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c-x4gjbgq.css';
import '../../css/n/n0_fj30lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c-x4gjbgq"/><path class="n0_fj30lv"/></g>`,
		"fallback": "streamline-ultimate:radiology-scanner",
	});
}

export default Component;
