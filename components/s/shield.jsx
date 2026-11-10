import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/np9_18bok.css';
import '../../css/d/drnhc8b1o.css';
import '../../css/n/n3u59gxti.css';
import '../../css/d/dynt_e_ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="np9_18bok"/><path class="drnhc8b1o"/><path class="n3u59gxti"/><path class="dynt_e_ch"/></g>`,
		"fallback": "matita:shield",
	});
}

export default Component;
