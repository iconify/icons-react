import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3gc3dbox.css';
import '../../css/e/ehsnx0a7z.css';
import '../../css/h/h1k300bfz.css';
import '../../css/b/b1gf1ebtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v3gc3dbox"/><path class="ehsnx0a7z"/><path class="h1k300bfz"/><path class="b1gf1ebtc"/></g>`,
		"fallback": "streamline-cyber-color:medical-box",
	});
}

export default Component;
