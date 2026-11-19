import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1e1pvq4e.css';
import '../../css/v/v5l85n9lq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r1e1pvq4e"/><path class="v5l85n9lq"/></g>`,
		"fallback": "andrsrxn:padding-bottom",
	});
}

export default Component;
