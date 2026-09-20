import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/gy35mbgbv.css';
import '../../css/n/nmskv_bux.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="gy35mbgbv"/><path class="nmskv_bux"/></g>`,
		"fallback": "streamline-plump:toilet-sign-man",
	});
}

export default Component;
