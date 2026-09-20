import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kd2rc6f4i.css';
import '../../css/r/rpgmwihxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kd2rc6f4i"/><path class="rpgmwihxp"/></g>`,
		"fallback": "streamline-freehand:product-launch-go-sign",
	});
}

export default Component;
