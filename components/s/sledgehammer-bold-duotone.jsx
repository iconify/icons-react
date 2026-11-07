import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc-90zu7e.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/xhtmzff9z.css';
import '../../css/v/v2j-f2pit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc-90zu7e"/><g class="xtpeb-edw"><path class="xhtmzff9z"/><path class="v2j-f2pit"/></g>`,
		"fallback": "solar:sledgehammer-bold-duotone",
	});
}

export default Component;
