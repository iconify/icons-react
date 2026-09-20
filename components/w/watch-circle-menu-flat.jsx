import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rcp39sbqz.css';
import '../../css/q/qkpxkebkm.css';
import '../../css/w/w2tds9x2m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rcp39sbqz"/><path class="qkpxkebkm"/><path class="w2tds9x2m"/></g>`,
		"fallback": "streamline-color:watch-circle-menu-flat",
	});
}

export default Component;
