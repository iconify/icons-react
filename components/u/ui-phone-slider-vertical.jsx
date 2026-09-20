import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rrjakbcym.css';
import '../../css/a/a6ca1bcxc.css';
import '../../css/e/epyd8hb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rrjakbcym"/><path class="a6ca1bcxc"/><path class="epyd8hb_w"/></g>`,
		"fallback": "streamline-freehand-color:ui-phone-slider-vertical",
	});
}

export default Component;
