import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eejnf1b3h.css';
import '../../css/d/dh6-9-dap.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eejnf1b3h"/><path class="dh6-9-dap"/></g>`,
		"fallback": "glyphs-poly:sun",
	});
}

export default Component;
