import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dc-opbbnk.css';
import '../../css/f/fqnkg2bwc.css';
import '../../css/f/f99jusbwg.css';
import '../../css/o/o6n94jakv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dc-opbbnk"/><path class="fqnkg2bwc"/><path class="f99jusbwg"/><path class="o6n94jakv"/></g>`,
		"fallback": "streamline-freehand-color:server-hand",
	});
}

export default Component;
