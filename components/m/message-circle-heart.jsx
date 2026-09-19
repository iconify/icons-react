import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jjjmetb3n.css';
import '../../css/a/aye_guweo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jjjmetb3n"/><path class="aye_guweo"/></g>`,
		"fallback": "hugeicons:message-circle-heart",
	});
}

export default Component;
