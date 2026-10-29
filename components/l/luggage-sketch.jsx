import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g9cwhbb5j.css';
import '../../css/g/godjt6baw.css';
import '../../css/a/aty4zjtxs.css';
import '../../css/x/xt6fe4b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g9cwhbb5j"/><path class="godjt6baw wm-a"/><path class="aty4zjtxs wm-k"/><path class="wm-a xt6fe4b-l"/></g>`,
		"fallback": "withicons:luggage-sketch",
	});
}

export default Component;
