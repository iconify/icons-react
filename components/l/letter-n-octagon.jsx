import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/abif2t93f.css';
import '../../css/c/cgk8wsbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="abif2t93f"/><path class="cgk8wsbcl"/></g>`,
		"fallback": "mynaui:letter-n-octagon",
	});
}

export default Component;
