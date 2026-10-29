import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tsgnk6b9n.css';
import '../../css/p/p77vdobsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tsgnk6b9n"/><path class="p77vdobsr wm-a"/></g>`,
		"fallback": "withicons:settings-2",
	});
}

export default Component;
