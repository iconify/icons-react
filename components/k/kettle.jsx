import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xo540u1dm.css';
import '../../css/i/i75ax53xw.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xo540u1dm"/><path class="i75ax53xw"/></g>`,
		"fallback": "icon-park-solid:kettle",
	});
}

export default Component;
