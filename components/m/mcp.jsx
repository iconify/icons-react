import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hv49szwvm.css';
import '../../css/d/dc6l11v-t.css';
import '../../css/o/okb9v7bex.css';
import '../../css/x/xuj0x92pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hv49szwvm"/><path class="dc6l11v-t"/><path class="okb9v7bex"/><path class="xuj0x92pg"/></g>`,
		"fallback": "andrsrxn:mcp",
	});
}

export default Component;
