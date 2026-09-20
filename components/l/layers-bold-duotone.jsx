import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbit8ibsb.css';
import '../../css/x/xy3f92aca.css';
import '../../css/s/sudowun8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kbit8ibsb"/><path class="xy3f92aca"/><path class="sudowun8c"/></g>`,
		"fallback": "solar:layers-bold-duotone",
	});
}

export default Component;
