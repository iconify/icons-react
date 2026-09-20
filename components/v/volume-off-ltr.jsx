import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc2_ucbye.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc2_ucbye"/>`,
		"fallback": "ooui:volume-off-ltr",
	});
}

export default Component;
