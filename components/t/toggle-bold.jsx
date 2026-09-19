import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qak5zwdmw.css';
import '../../css/k/kkxs9859g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qak5zwdmw"/><path class="kkxs9859g"/></g>`,
		"fallback": "glyphs:toggle-bold",
	});
}

export default Component;
