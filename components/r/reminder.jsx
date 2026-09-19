import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dye8fz2in.css';
import '../../css/h/h0jbmubck.css';
import '../../css/t/tawp0wban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dye8fz2in"/><path class="h0jbmubck"/><path class="tawp0wban"/></g>`,
		"fallback": "hugeicons:reminder",
	});
}

export default Component;
