import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fx5p0hbjj.css';
import '../../css/o/on_enzb7u.css';
import '../../css/s/s2b7odbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fx5p0hbjj"/><path class="on_enzb7u"/><path class="s2b7odbxm"/></g>`,
		"fallback": "andrsrxn:medal",
	});
}

export default Component;
