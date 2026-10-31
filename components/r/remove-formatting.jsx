import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/oz00ohsyf.css';
import '../../css/v/vrvs2074r.css';
import '../../css/t/t6ekaqv9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="oz00ohsyf wm-k"/><path class="vrvs2074r wm-s"/><path class="t6ekaqv9m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:remove-formatting",
	});
}

export default Component;
