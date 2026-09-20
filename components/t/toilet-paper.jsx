import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tmcd2b_ry.css';
import '../../css/h/h-yvp4bkp.css';
import '../../css/s/spj6lnxch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tmcd2b_ry"/><path class="h-yvp4bkp"/><path class="spj6lnxch"/></g>`,
		"fallback": "streamline-freehand-color:toilet-paper",
	});
}

export default Component;
