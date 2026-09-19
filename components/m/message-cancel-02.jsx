import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/neownrw5s.css';
import '../../css/y/ye5ddfjfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="neownrw5s"/><path class="ye5ddfjfu"/></g>`,
		"fallback": "hugeicons:message-cancel-02",
	});
}

export default Component;
