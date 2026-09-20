import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z99vifmop.css';
import '../../css/m/mrwtbc_ba.css';
import '../../css/v/v76fh54tr.css';
import '../../css/b/bxqz_zugs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z99vifmop"/><path class="mrwtbc_ba"/><path class="v76fh54tr"/><path class="bxqz_zugs"/></g>`,
		"fallback": "streamline-freehand-color:show-hat-magician-1",
	});
}

export default Component;
