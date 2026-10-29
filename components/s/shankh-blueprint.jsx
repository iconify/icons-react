import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xj-07jblj.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/i/i-jd_pb6u.css';
import '../../css/x/xmdcamjdi.css';
import '../../css/w/wnsnzr7ee.css';
import '../../css/w/wpckjl5vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xj-07jblj"/><path class="o7-ag87sb wm-deco"/><path class="i-jd_pb6u wm-k"/><path class="wm-k xmdcamjdi"/><path class="wm-a wnsnzr7ee"/><path class="wm-a wpckjl5vw"/></g>`,
		"fallback": "withicons:shankh-blueprint",
	});
}

export default Component;
