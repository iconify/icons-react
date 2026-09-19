import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hwepoubwy.css';
import '../../css/d/dfa1vk68q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hwepoubwy"/><path class="dfa1vk68q"/></g>`,
		"fallback": "hugeicons:message-add-02",
	});
}

export default Component;
