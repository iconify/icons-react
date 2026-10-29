import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pqwfdvh6t.css';
import '../../css/b/b0pdi0-3d.css';
import '../../css/n/nboiatbai.css';
import '../../css/k/kbj8nvb7i.css';
import '../../css/p/ptk50absq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pqwfdvh6t"/><path class="b0pdi0-3d"/><path class="nboiatbai wm-a"/><path class="kbj8nvb7i"/><path class="ptk50absq"/></g>`,
		"fallback": "withicons:telescope-duo",
	});
}

export default Component;
