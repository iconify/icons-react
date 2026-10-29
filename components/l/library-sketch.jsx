import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gie3geb9a.css';
import '../../css/f/f33oscbyn.css';
import '../../css/o/o_ba6fyis.css';
import '../../css/d/ds28d454v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gie3geb9a"/><path class="f33oscbyn wm-k"/><path class="o_ba6fyis wm-k"/><path class="ds28d454v wm-a"/></g>`,
		"fallback": "withicons:library-sketch",
	});
}

export default Component;
