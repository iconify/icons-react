import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hybqmlbrz.css';
import '../../css/e/ef7iipb0p.css';
import '../../css/w/wp31-1bdq.css';
import '../../css/t/t1hkudb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hybqmlbrz"/><path class="ef7iipb0p"/><path class="wm-a wp31-1bdq"/><path class="t1hkudb-d"/></g>`,
		"fallback": "withicons:paste-duo",
	});
}

export default Component;
