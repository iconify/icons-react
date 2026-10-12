import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmr1a-b-n.css';
import '../../css/x/xd3t6t9-u.css';
import '../../css/b/b3hz54bib.css';
import '../../css/g/geya0ibia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tmr1a-b-n"/><rect transform="matrix(0 -1 -1 0 21.23 9.35)" class="xd3t6t9-u"/><rect transform="matrix(0 -1 -1 0 21.23 21.27)" class="b3hz54bib"/><path class="geya0ibia"/></g>`,
		"fallback": "andrsrxn:panel-top-open-filled",
	});
}

export default Component;
