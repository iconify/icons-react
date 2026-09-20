import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a8gps4bht.css';
import '../../css/c/c-dlmxm4t.css';
import '../../css/r/rtgrnjbsf.css';
import '../../css/x/xjfc-xbtr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a8gps4bht"/><path class="c-dlmxm4t"/><path class="rtgrnjbsf"/><path class="xjfc-xbtr"/></g>`,
		"fallback": "streamline-color:location-compass-1",
	});
}

export default Component;
