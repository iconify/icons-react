import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/z/z5rkh944m.css';
import '../../css/p/puy6albkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="z5rkh944m"/><path class="puy6albkt"/></g>`,
		"fallback": "streamline-sharp-color:table-lamp-2",
	});
}

export default Component;
