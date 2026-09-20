import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffnnpya0h.css';
import '../../css/d/dhjmlzbnr.css';
import '../../css/e/e_ps89beo.css';
import '../../css/o/oqx9b0dfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ffnnpya0h"/><path class="dhjmlzbnr"/><path class="e_ps89beo"/><path class="oqx9b0dfy"/></g>`,
		"fallback": "tdesign:shop-1",
	});
}

export default Component;
