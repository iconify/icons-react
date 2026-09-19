import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/ag8lg4baf.css';
import '../../css/w/wh6t2rs6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ag8lg4baf"/><path class="wh6t2rs6o"/></g>`,
		"fallback": "iconamoon:playlist-duotone",
	});
}

export default Component;
