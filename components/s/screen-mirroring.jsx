import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/m/mtumdmqin.css';
import '../../css/o/o610y3h4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="mtumdmqin"/><path class="o610y3h4y"/></g>`,
		"fallback": "tdesign:screen-mirroring",
	});
}

export default Component;
