import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zsj7a9gzq.css';
import '../../css/u/uq7van9ri.css';
import '../../css/x/x_32o5bji.css';
import '../../css/y/y2dq4-b3s.css';
import '../../css/e/e-gsjcw2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="zsj7a9gzq"/><path class="uq7van9ri wm-shine"/><path class="wm-k x_32o5bji"/><path class="wm-a y2dq4-b3s"/><path class="e-gsjcw2p wm-deco"/></g>`,
		"fallback": "withicons-kawaii:ship",
	});
}

export default Component;
