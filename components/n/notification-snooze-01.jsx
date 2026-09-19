import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x6szhwbnt.css';
import '../../css/w/wtfyi0bxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x6szhwbnt"/><path class="wtfyi0bxx"/></g>`,
		"fallback": "hugeicons:notification-snooze-01",
	});
}

export default Component;
