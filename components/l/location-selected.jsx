import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hsh_5n6zs.css';
import '../../css/d/d-76f3e8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hsh_5n6zs"/><path class="d-76f3e8z"/></g>`,
		"fallback": "mynaui:location-selected",
	});
}

export default Component;
