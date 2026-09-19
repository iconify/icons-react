import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pzsh4ib_v.css';
import '../../css/g/gd5p6sbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="pzsh4ib_v"/><path class="gd5p6sbdq"/></g>`,
		"fallback": "guidance:lockers",
	});
}

export default Component;
