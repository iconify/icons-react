import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vf23vybtz.css';
import '../../css/l/lcvht-vsq.css';
import '../../css/u/urya28b7t.css';
import '../../css/c/cz0-ghgwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vf23vybtz wm-shadow"/><path class="lcvht-vsq wm-shadow"/><path class="urya28b7t"/><path class="cz0-ghgwa"/></g>`,
		"fallback": "withicons-brutal:pin",
	});
}

export default Component;
