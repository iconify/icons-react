import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/goe_53dyv.css';
import '../../css/i/i3vchurfh.css';
import '../../css/n/ns5q66kqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="goe_53dyv wm-k"/><path class="i3vchurfh wm-a"/><path class="ns5q66kqv wm-deco"/></g>`,
		"fallback": "withicons-kawaii:minimize",
	});
}

export default Component;
