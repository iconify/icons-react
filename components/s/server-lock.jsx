import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oysn7k5ti.css';
import '../../css/x/xbs_vnzhd.css';
import '../../css/u/utnt0dbeq.css';
import '../../css/h/hk-r7ubdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oysn7k5ti"/><path class="xbs_vnzhd"/><path class="utnt0dbeq"/><path class="hk-r7ubdz"/></g>`,
		"fallback": "streamline-freehand-color:server-lock",
	});
}

export default Component;
