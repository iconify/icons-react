import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pj0vs5keo.css';
import '../../css/m/mss05ytif.css';
import '../../css/v/v65-5bbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pj0vs5keo"/><path class="mss05ytif"/><path class="v65-5bbvt"/></g>`,
		"fallback": "andrsrxn:repeat-off",
	});
}

export default Component;
