import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/brb78ubne.css';
import '../../css/j/jtqkl-bna.css';
import '../../css/y/ybx905b6j.css';
import '../../css/i/imww9df-s.css';
import '../../css/o/o9flccw_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="brb78ubne"/><path class="jtqkl-bna"/><path class="ybx905b6j"/><path class="imww9df-s"/><path class="o9flccw_o"/></g>`,
		"fallback": "solar:scooter-line-duotone",
	});
}

export default Component;
