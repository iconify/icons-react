import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9a7a1b1t.css';
import '../../css/g/gfb_vbuzc.css';
import '../../css/t/t_14bcbiq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b9a7a1b1t"/><path class="gfb_vbuzc"/><path clip-rule="evenodd" class="t_14bcbiq"/></g>`,
		"fallback": "streamline-color:user-remove-subtract-flat",
	});
}

export default Component;
