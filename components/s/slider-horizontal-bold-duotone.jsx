import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7_x8abzz.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/hroj_xbvp.css';
import '../../css/q/qk-cax30a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7_x8abzz"/><g class="xtpeb-edw"><path class="hroj_xbvp"/><path class="qk-cax30a"/></g>`,
		"fallback": "solar:slider-horizontal-bold-duotone",
	});
}

export default Component;
