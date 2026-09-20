import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v9c03hitk.css';
import '../../css/s/ssdz2eb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v9c03hitk"/><path class="ssdz2eb2w"/></g>`,
		"fallback": "solar:move-linear",
	});
}

export default Component;
