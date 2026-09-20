import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlnc2n5di.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlnc2n5di"/>`,
		"fallback": "ooui:move-last-ltr",
	});
}

export default Component;
