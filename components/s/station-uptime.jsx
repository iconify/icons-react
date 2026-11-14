import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bufuxy3im.css';
import '../../css/r/r6mx50bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bufuxy3im"/><path class="r6mx50bim"/></g>`,
		"fallback": "evicons:station-uptime",
	});
}

export default Component;
