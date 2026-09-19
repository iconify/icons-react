import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hta34308p.css';
import '../../css/r/r6i16ds0i.css';
import '../../css/e/e70b2ubmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="hta34308p"/><circle class="r6i16ds0i"/><path class="e70b2ubmn"/></g>`,
		"fallback": "iconamoon:play-circle-duotone",
	});
}

export default Component;
