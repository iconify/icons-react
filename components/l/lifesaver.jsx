import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n4yelbbex.css';
import '../../css/a/azn53ws-b.css';
import '../../css/p/ph3p_zb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n4yelbbex"/><path vector-effect="non-scaling-stroke" class="azn53ws-b"/><path vector-effect="non-scaling-stroke" class="ph3p_zb4p"/></g>`,
		"fallback": "wordpress:lifesaver",
	});
}

export default Component;
