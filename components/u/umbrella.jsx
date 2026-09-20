import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y8mbonb9n.css';
import '../../css/z/zpnq9rbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y8mbonb9n"/><path class="zpnq9rbtv"/></g>`,
		"fallback": "mynaui:umbrella",
	});
}

export default Component;
