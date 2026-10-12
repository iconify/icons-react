import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfcbwwaex.css';
import '../../css/s/svs5gwb5u.css';
import '../../css/u/u-gwigb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bfcbwwaex"/><path class="svs5gwb5u"/><path class="u-gwigb5t"/></g>`,
		"fallback": "andrsrxn:keyframes",
	});
}

export default Component;
