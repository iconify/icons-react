import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r4bt0cv2m.css';
import '../../css/n/npbii8bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r4bt0cv2m"/><path clip-rule="evenodd" class="npbii8bhv"/></g>`,
		"fallback": "keyline-icons:toggles-sharp-duotone",
	});
}

export default Component;
