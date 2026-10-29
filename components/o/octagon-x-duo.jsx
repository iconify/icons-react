import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n8yc7ccpm.css';
import '../../css/j/jmo57ab0a.css';
import '../../css/b/b82dfnb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n8yc7ccpm"/><path class="jmo57ab0a wm-a"/><path class="b82dfnb_o"/></g>`,
		"fallback": "withicons:octagon-x-duo",
	});
}

export default Component;
