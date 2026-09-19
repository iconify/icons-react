import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y7yss0boz.css';
import '../../css/a/a4seoe1_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y7yss0boz"/><path class="a4seoe1_a"/></g>`,
		"fallback": "hugeicons:message-incoming-01",
	});
}

export default Component;
