import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6_lwd2sp.css';
import '../../css/e/e-tetgb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6_lwd2sp"/><path class="e-tetgb0x"/>`,
		"fallback": "streamline-freehand:navigation-page-right",
	});
}

export default Component;
