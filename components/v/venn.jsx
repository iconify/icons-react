import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl_l48dcr.css';
import '../../css/x/xog7ueb_e.css';
import '../../css/z/zqbo6tbma.css';
import '../../css/u/ugrd2cctn.css';
import '../../css/n/ngcjnj3ys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-rule="evenodd" class="bl_l48dcr"><path class="xog7ueb_e"/><path class="zqbo6tbma"/></g><path class="ugrd2cctn"/><path class="ngcjnj3ys"/></g>`,
		"fallback": "andrsrxn:venn",
	});
}

export default Component;
