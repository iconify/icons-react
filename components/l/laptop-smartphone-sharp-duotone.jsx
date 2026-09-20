import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hlf9xubcs.css';
import '../../css/z/zojokz93c.css';
import '../../css/z/zoch16lok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hlf9xubcs"/><path class="zojokz93c"/><path clip-rule="evenodd" class="zoch16lok"/></g>`,
		"fallback": "keyline-icons:laptop-smartphone-sharp-duotone",
	});
}

export default Component;
