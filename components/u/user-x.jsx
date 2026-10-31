import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vnq981bkn.css';
import '../../css/l/l8q8ovjdk.css';
import '../../css/z/zoh2-g5is.css';
import '../../css/p/paqk5i3rz.css';
import '../../css/h/h7p1vybbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vnq981bkn wm-shadow"/><path class="l8q8ovjdk wm-shadow"/><path class="zoh2-g5is"/><path class="paqk5i3rz"/><path class="h7p1vybbd wm-s"/></g>`,
		"fallback": "withicons-brutal:user-x",
	});
}

export default Component;
