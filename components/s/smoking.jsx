import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gd984bb7x.css';
import '../../css/z/z0l8-t28l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gd984bb7x"/><rect class="z0l8-t28l"/></g>`,
		"fallback": "iconoir:smoking",
	});
}

export default Component;
