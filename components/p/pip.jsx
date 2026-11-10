import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/un6vemslo.css';
import '../../css/a/as-vlp4_t.css';
import '../../css/s/sam7c4byv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="un6vemslo"/><path class="as-vlp4_t"/><path class="sam7c4byv"/></g>`,
		"fallback": "andrsrxn:pip",
	});
}

export default Component;
