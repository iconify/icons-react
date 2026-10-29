import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f4fq62boi.css';
import '../../css/o/oos9n2b5s.css';
import '../../css/o/oiiu6_b2q.css';
import '../../css/v/va5hn9blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f4fq62boi wm-k"/><path class="oos9n2b5s wm-a"/><path class="oiiu6_b2q wm-k"/><path class="va5hn9blj wm-a"/></g>`,
		"fallback": "withicons:sort-sketch",
	});
}

export default Component;
