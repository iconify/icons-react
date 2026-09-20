import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqmd109zb.css';
import '../../css/u/uz-bfgn0y.css';
import '../../css/x/xbxw-bcec.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eqmd109zb"/><path clip-rule="evenodd" class="uz-bfgn0y"/><path class="xbxw-bcec"/></g>`,
		"fallback": "streamline-flex-color:pictures-folder-memories-flat",
	});
}

export default Component;
