import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/srf9cpbdl.css';
import '../../css/e/e1-t38bgi.css';
import '../../css/w/wzeaelb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="srf9cpbdl"/><path class="e1-t38bgi"/><path class="wzeaelb-n"/></g>`,
		"fallback": "streamline-sharp-color:sound-recognition-search",
	});
}

export default Component;
