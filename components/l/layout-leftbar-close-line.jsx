import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acrih_vdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acrih_vdm"/>`,
		"fallback": "mingcute:layout-leftbar-close-line",
	});
}

export default Component;
