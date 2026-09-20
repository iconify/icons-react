import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t26kuab0a.css';
import '../../css/g/g6d8xrbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t26kuab0a"/><path class="g6d8xrbod"/></g>`,
		"fallback": "mage:message-conversation",
	});
}

export default Component;
