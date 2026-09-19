import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/obfzrqope.css';
import '../../css/h/h48xn4b4n.css';
import '../../css/u/u8t73uffw.css';
import '../../css/d/dbq1ikb8j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="obfzrqope"/><path class="h48xn4b4n"/><path class="u8t73uffw"/><path class="dbq1ikb8j"/></g>`,
		"fallback": "icon-park:magic-wand",
	});
}

export default Component;
