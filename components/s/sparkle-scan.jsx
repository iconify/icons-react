import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxx5tzbzu.css';
import '../../css/a/alj1d-89a.css';
import '../../css/j/j_2dvzhbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lxx5tzbzu"/><path class="alj1d-89a"/><path clip-rule="evenodd" class="j_2dvzhbt"/></g>`,
		"fallback": "andrsrxn:sparkle-scan",
	});
}

export default Component;
