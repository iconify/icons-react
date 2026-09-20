import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fxmi7xbkk.css';
import '../../css/r/r2ak6acpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fxmi7xbkk"/><path class="r2ak6acpy"/></g>`,
		"fallback": "streamline-freehand-color:wealth-gold-bars",
	});
}

export default Component;
