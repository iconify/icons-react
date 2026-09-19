import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jz-mj0_jb.css';
import '../../css/a/ak742-b8l.css';
import '../../css/e/evq4mdbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jz-mj0_jb"/><path class="ak742-b8l"/><path class="evq4mdbon"/></g>`,
		"fallback": "hugeicons:lift-truck",
	});
}

export default Component;
