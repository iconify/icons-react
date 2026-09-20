import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/j/jd5cu_bod.css';
import '../../css/i/iq_367b1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="jd5cu_bod"/><path class="iq_367b1p"/></g>`,
		"fallback": "tdesign:order",
	});
}

export default Component;
