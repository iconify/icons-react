import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/odnmdzi_x.css';
import '../../css/d/dorpla9vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="odnmdzi_x"/><path class="dorpla9vi wm-a"/></g>`,
		"fallback": "withicons:route",
	});
}

export default Component;
