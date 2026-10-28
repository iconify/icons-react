import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1ri0kbmb.css';
import '../../css/j/jcooprb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s1ri0kbmb"/><path class="jcooprb2f"/></g>`,
		"fallback": "andrsrxn:logic-and",
	});
}

export default Component;
