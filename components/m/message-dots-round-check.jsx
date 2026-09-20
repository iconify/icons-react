import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k938yxbhi.css';
import '../../css/b/b7jj8e8yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k938yxbhi"/><path class="b7jj8e8yz"/></g>`,
		"fallback": "mage:message-dots-round-check",
	});
}

export default Component;
