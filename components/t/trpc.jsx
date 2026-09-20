import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pqjg6_uxs.css';
import '../../css/q/qdb6ctypl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="pqjg6_uxs"/><path clip-rule="evenodd" class="qdb6ctypl"/></g>`,
		"fallback": "thesvg-color:trpc",
	});
}

export default Component;
