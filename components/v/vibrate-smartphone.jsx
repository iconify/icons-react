import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fco2iuixh.css';
import '../../css/k/kuzebnbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fco2iuixh"/><path class="kuzebnbpv"/></g>`,
		"fallback": "streamline-freehand-color:vibrate-smartphone",
	});
}

export default Component;
