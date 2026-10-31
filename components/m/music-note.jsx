import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yu7eqjdiz.css';
import '../../css/g/gld13ib1j.css';
import '../../css/r/riw1icuwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow yu7eqjdiz"/><path class="gld13ib1j"/><path class="riw1icuwq"/></g>`,
		"fallback": "withicons-retro:music-note",
	});
}

export default Component;
