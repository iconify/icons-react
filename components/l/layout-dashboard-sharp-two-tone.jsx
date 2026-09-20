import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xduc-swcr.css';
import '../../css/n/ng-f0uqhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xduc-swcr"/><path class="ng-f0uqhx"/></g>`,
		"fallback": "keyline-icons:layout-dashboard-sharp-two-tone",
	});
}

export default Component;
