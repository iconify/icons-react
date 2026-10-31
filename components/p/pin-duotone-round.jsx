import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/veolxhbmk.css';
import '../../css/x/xnjprmbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="veolxhbmk"/><path class="xnjprmbiw"/></g>`,
		"fallback": "coolicons:pin-duotone-round",
	});
}

export default Component;
