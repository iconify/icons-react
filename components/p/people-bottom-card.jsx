import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uiyabfwxa.css';
import '../../css/g/gr_ff-bih.css';
import '../../css/r/r_kg6lwxt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="uiyabfwxa"/><circle class="gr_ff-bih"/><path class="r_kg6lwxt"/></g>`,
		"fallback": "icon-park:people-bottom-card",
	});
}

export default Component;
