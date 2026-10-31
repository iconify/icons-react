import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lxh3udb_b.css';
import '../../css/y/yvye1mqze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lxh3udb_b wm-k"/><path class="wm-a yvye1mqze"/></g>`,
		"fallback": "withicons:ship-gloss",
	});
}

export default Component;
