import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h88go_jib.css';
import '../../css/b/b4eqpv5mm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h88go_jib"/><path class="b4eqpv5mm"/></g>`,
		"fallback": "tdesign:tree-square-dot",
	});
}

export default Component;
