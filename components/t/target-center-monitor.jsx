import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gy6xh0byw.css';
import '../../css/p/p6g4mh8-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gy6xh0byw"/><path class="p6g4mh8-s"/></g>`,
		"fallback": "streamline-ultimate:target-center-monitor",
	});
}

export default Component;
