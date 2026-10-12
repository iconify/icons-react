import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ro7u9-xwx.css';
import '../../css/m/mkwnvz-0j.css';
import '../../css/n/ngik8bc5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ro7u9-xwx"/><path class="mkwnvz-0j"/><path class="ngik8bc5z"/></g>`,
		"fallback": "andrsrxn:shoe",
	});
}

export default Component;
