import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/vjzc1ab5s.css';
import '../../css/u/ums1ott0p.css';
import '../../css/x/x02zc1bxw.css';
import '../../css/v/vhv1pdf1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="vjzc1ab5s wm-shadow"/><path class="ums1ott0p"/><path class="x02zc1bxw"/><path class="vhv1pdf1x"/></g>`,
		"fallback": "withicons-brutal:radar",
	});
}

export default Component;
