import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tiwzp9pyz.css';
import '../../css/h/h76cb7bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tiwzp9pyz"/><path class="h76cb7bbv"/></g>`,
		"fallback": "hugeicons:moon-cloud-angled-zap",
	});
}

export default Component;
