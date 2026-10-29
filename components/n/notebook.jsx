import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/ctaobdbfw.css';
import '../../css/z/zpd26ob0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ctaobdbfw"/><path class="wm-a zpd26ob0q"/></g>`,
		"fallback": "withicons:notebook",
	});
}

export default Component;
