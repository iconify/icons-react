import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j0okf2bfb.css';
import '../../css/i/ijbu4ka0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="j0okf2bfb"/><circle vector-effect="non-scaling-stroke" class="ijbu4ka0a"/></g>`,
		"fallback": "wordpress:seen",
	});
}

export default Component;
