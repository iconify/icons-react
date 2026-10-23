import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2x05ox4c.css';
import '../../css/u/uyqlyjidv.css';
import '../../css/y/ychcxgb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l2x05ox4c"/><path class="uyqlyjidv"/><path class="ychcxgb2z"/></g>`,
		"fallback": "andrsrxn:waves-shark",
	});
}

export default Component;
