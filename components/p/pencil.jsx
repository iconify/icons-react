import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/t/t9qsu0brn.css';
import '../../css/f/f7gbtcyuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="t9qsu0brn"/><path class="f7gbtcyuq"/></g>`,
		"fallback": "akar-icons:pencil",
	});
}

export default Component;
