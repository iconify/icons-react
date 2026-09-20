import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yoz1fh86x.css';
import '../../css/r/rjrlaonwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yoz1fh86x"/><path class="rjrlaonwc"/></g>`,
		"fallback": "reicon:monitor-recorder",
	});
}

export default Component;
