import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gw4gbeg1r.css';
import '../../css/m/mh5-fbyri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gw4gbeg1r"/><path class="mh5-fbyri"/></g>`,
		"fallback": "keyline-icons:quote-end-sharp-duotone",
	});
}

export default Component;
