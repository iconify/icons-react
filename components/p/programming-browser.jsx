import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uy0_c856w.css';
import '../../css/u/u96oi128d.css';
import '../../css/p/pyvr7j5_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uy0_c856w"/><path class="u96oi128d"/><path class="pyvr7j5_z"/></g>`,
		"fallback": "streamline-freehand-color:programming-browser",
	});
}

export default Component;
