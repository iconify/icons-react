import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/foi77rb5z.css';
import '../../css/e/eud6ppvya.css';
import '../../css/h/h_n6g_bcp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="foi77rb5z"/><path clip-rule="evenodd" class="eud6ppvya"/><path class="h_n6g_bcp"/></g>`,
		"fallback": "streamline-flex-color:soft-drink-can-flat",
	});
}

export default Component;
