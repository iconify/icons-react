import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvjr_cb6m.css';
import '../../css/w/wrj4iilsl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uvjr_cb6m"/><path class="wrj4iilsl"/></g>`,
		"fallback": "glyphs:lightbulb-2-duo",
	});
}

export default Component;
