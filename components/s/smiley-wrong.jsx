import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ura5j9k2q.css';
import '../../css/w/wuyn-hbnm.css';
import '../../css/l/l3z2k4aaj.css';
import '../../css/a/a_nz5fb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ura5j9k2q"/><path class="wuyn-hbnm"/><path class="l3z2k4aaj"/><path class="a_nz5fb3g"/></g>`,
		"fallback": "streamline-ultimate-color:smiley-wrong",
	});
}

export default Component;
