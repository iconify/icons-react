import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/ewcbejbwr.css';
import '../../css/p/p52332dst.css';
import '../../css/x/xeftzuwhc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ewcbejbwr"/><path class="p52332dst"/><path class="xeftzuwhc"/></g>`,
		"fallback": "streamline-plump:shipment-upload",
	});
}

export default Component;
