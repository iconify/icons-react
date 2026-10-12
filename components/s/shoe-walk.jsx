import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp5a-txcx.css';
import '../../css/r/rtmrqnb5v.css';
import '../../css/b/bkcqmywkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mp5a-txcx"/><path class="rtmrqnb5v"/><path class="bkcqmywkl"/></g>`,
		"fallback": "andrsrxn:shoe-walk",
	});
}

export default Component;
