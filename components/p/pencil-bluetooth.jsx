import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uktk3sb0i.css';
import '../../css/v/v76emacuf.css';
import '../../css/g/geucpzb7p.css';
import '../../css/h/hr2qubc4q.css';
import '../../css/n/n5wakzi4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-45 24.16 -17.95)scale(1 -1)" class="uktk3sb0i"/><path class="v76emacuf"/><path class="geucpzb7p"/><path class="hr2qubc4q"/><path class="n5wakzi4w"/></g>`,
		"fallback": "andrsrxn:pencil-bluetooth",
	});
}

export default Component;
