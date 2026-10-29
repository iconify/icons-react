import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/ruati2b7a.css';
import '../../css/t/t4ya6qb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ruati2b7a"/><path class="t4ya6qb4m"/></g>`,
		"fallback": "withicons:signal-duo",
	});
}

export default Component;
