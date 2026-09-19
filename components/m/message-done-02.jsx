import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k9t-c7oiu.css';
import '../../css/u/u997x_qrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k9t-c7oiu"/><path class="u997x_qrv"/></g>`,
		"fallback": "hugeicons:message-done-02",
	});
}

export default Component;
