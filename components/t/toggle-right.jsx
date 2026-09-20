import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/srvpi8mld.css';
import '../../css/r/rtgzoobsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="srvpi8mld"/><path class="rtgzoobsw"/></g>`,
		"fallback": "mynaui:toggle-right",
	});
}

export default Component;
