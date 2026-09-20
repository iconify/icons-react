import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2pk1ut_e.css';
import '../../css/d/dskmcgbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p2pk1ut_e"/><path class="dskmcgbyb"/></g>`,
		"fallback": "reicon:message-search",
	});
}

export default Component;
