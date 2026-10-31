import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x321x6n8m.css';
import '../../css/p/p44obn_zo.css';
import '../../css/v/ve4_surhs.css';
import '../../css/c/c09a2_xea.css';
import '../../css/o/oqo4dbdmo.css';
import '../../css/l/lhoydwqub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow x321x6n8m"/><path class="p44obn_zo"/><path class="ve4_surhs"/><path class="c09a2_xea"/><path class="oqo4dbdmo"/><path class="lhoydwqub"/></g>`,
		"fallback": "withicons-retro:star",
	});
}

export default Component;
