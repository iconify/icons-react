import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dwgxxyb8f.css';
import '../../css/d/dq2xj-buu.css';
import '../../css/c/cxd44-flo.css';
import '../../css/o/oql-gibjb.css';
import '../../css/a/ae8-4hw4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="dwgxxyb8f wm-shadow"/><path class="dq2xj-buu wm-shadow"/><path class="cxd44-flo"/><path class="oql-gibjb"/><path class="ae8-4hw4c"/></g>`,
		"fallback": "withicons-brutal:stroller",
	});
}

export default Component;
