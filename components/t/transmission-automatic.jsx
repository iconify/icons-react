import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9sk63buc.css';
import '../../css/r/r1a2ovbtw.css';
import '../../css/a/acjtibznp.css';
import '../../css/j/jrdmm8b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l9sk63buc"/><circle class="r1a2ovbtw"/><circle class="acjtibznp"/><path class="jrdmm8b8p"/></g>`,
		"fallback": "andrsrxn:transmission-automatic",
	});
}

export default Component;
