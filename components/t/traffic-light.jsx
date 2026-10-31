import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xga7jrb_o.css';
import '../../css/f/fl7kq9drs.css';
import '../../css/z/zowtjgbcv.css';
import '../../css/b/br52c-b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xga7jrb_o"/><path class="fl7kq9drs wm-shadow"/><path class="zowtjgbcv"/><path class="br52c-b9k"/></g>`,
		"fallback": "withicons-brutal:traffic-light",
	});
}

export default Component;
