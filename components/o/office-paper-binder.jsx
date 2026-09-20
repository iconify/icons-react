import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dpf22ybrv.css';
import '../../css/m/mjbq1q3lt.css';
import '../../css/n/nxp5z5bgo.css';
import '../../css/y/y5i2yrbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dpf22ybrv"/><path class="mjbq1q3lt"/><path class="nxp5z5bgo"/><path class="y5i2yrbgs"/></g>`,
		"fallback": "streamline-freehand-color:office-paper-binder",
	});
}

export default Component;
