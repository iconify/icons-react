import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ydwi29bvh.css';
import '../../css/d/dztg_0iwx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ydwi29bvh"/><path class="dztg_0iwx"/></g>`,
		"fallback": "streamline-plump:voice-mail",
	});
}

export default Component;
