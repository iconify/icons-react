import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b42uobcxl.css';
import '../../css/o/oh-xkt67m.css';
import '../../css/h/h3xfvwbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b42uobcxl"/><path class="oh-xkt67m wm-a"/><path class="h3xfvwbbf wm-a"/></g>`,
		"fallback": "withicons:list-tree",
	});
}

export default Component;
