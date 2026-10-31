import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gdg5wjb-n.css';
import '../../css/w/wrsin2b2e.css';
import '../../css/v/vm3yhza8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gdg5wjb-n wm-shadow"/><path class="wrsin2b2e"/><path class="vm3yhza8m"/></g>`,
		"fallback": "withicons-retro:pandal",
	});
}

export default Component;
