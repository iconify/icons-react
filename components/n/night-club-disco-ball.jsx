import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rkyz1ebpw.css';
import '../../css/a/ar3yodb8t.css';
import '../../css/y/y88m-0toy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rkyz1ebpw"/><path class="ar3yodb8t"/><path class="y88m-0toy"/></g>`,
		"fallback": "streamline-ultimate:night-club-disco-ball",
	});
}

export default Component;
