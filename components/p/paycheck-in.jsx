import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1fk_xbli.css';
import '../../css/y/y-ss8nbat.css';
import '../../css/c/ceqarygsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y1fk_xbli"/><path class="y-ss8nbat"/><path class="ceqarygsw"/></g>`,
		"fallback": "andrsrxn:paycheck-in",
	});
}

export default Component;
