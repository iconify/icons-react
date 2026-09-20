import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cfc8dbu4o.css';
import '../../css/o/o6hzein6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cfc8dbu4o"/><path class="o6hzein6s"/></g>`,
		"fallback": "streamline-ultimate:send-email-fly",
	});
}

export default Component;
