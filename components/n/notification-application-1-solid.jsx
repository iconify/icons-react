import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxcr81blq.css';
import '../../css/t/t57gmwbsc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxcr81blq"/><path clip-rule="evenodd" class="t57gmwbsc"/>`,
		"fallback": "streamline-flex:notification-application-1-solid",
	});
}

export default Component;
