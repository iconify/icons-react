import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xtmp_obak.css';
import '../../css/t/t69kdhb6d.css';
import '../../css/w/wt-zptbdg.css';
import '../../css/l/l4k36-boo.css';
import '../../css/x/x43u27blq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k xtmp_obak"/><path class="t69kdhb6d wm-k"/><path class="wm-s wt-zptbdg"/><path class="l4k36-boo"/><path class="x43u27blq"/></g>`,
		"fallback": "withicons-bauhaus:jack-o-lantern",
	});
}

export default Component;
