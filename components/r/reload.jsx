import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/f/fmezsg_0a.css';
import '../../css/d/d7myvrb7j.css';
import '../../css/z/zew7e1b0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="fmezsg_0a"/><path class="d7myvrb7j"/><path class="zew7e1b0p"/></g>`,
		"fallback": "icon-park-solid:reload",
	});
}

export default Component;
