import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u-l9_hbgq.css';
import '../../css/s/s13lngkjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u-l9_hbgq"/><path class="s13lngkjs"/></g>`,
		"fallback": "andrsrxn:redo",
	});
}

export default Component;
