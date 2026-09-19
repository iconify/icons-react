import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/becg_5w7n.css';
import '../../css/d/dvht4yutc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="becg_5w7n"/><path class="dvht4yutc"/></g>`,
		"fallback": "hugeicons:pin-code",
	});
}

export default Component;
