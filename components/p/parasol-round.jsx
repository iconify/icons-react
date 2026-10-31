import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avn7179zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avn7179zt"/>`,
		"fallback": "coolicons:parasol-round",
	});
}

export default Component;
