import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh974hv9a.css';
import '../../css/x/xdhwcn32g.css';
import '../../css/f/ffmgiytrk.css';
import '../../css/k/ker0gib4l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xh974hv9a"/><path class="xdhwcn32g"/><path class="ffmgiytrk"/><path class="ker0gib4l"/></g>`,
		"fallback": "icon-park:medicine-chest",
	});
}

export default Component;
