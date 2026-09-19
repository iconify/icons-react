import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/llper-sbd.css';
import '../../css/d/d1p1nriqg.css';
import '../../css/r/r6i16ds0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="llper-sbd"/><path class="d1p1nriqg"/><circle class="r6i16ds0i"/></g>`,
		"fallback": "iconamoon:number-0-circle-duotone",
	});
}

export default Component;
