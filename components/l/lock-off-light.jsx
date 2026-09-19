import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/arpu5vbaf.css';
import '../../css/q/q-s4sibmx.css';
import '../../css/b/b_4b31nqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="arpu5vbaf"/><path class="q-s4sibmx"/><path class="b_4b31nqz"/></g>`,
		"fallback": "iconamoon:lock-off-light",
	});
}

export default Component;
