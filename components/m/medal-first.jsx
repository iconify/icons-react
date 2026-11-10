import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm8kvpb3m.css';
import '../../css/n/nfe9ueb_f.css';
import '../../css/l/ldaz-rb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dm8kvpb3m"/><path class="nfe9ueb_f"/><path class="ldaz-rb8v"/></g>`,
		"fallback": "andrsrxn:medal-first",
	});
}

export default Component;
