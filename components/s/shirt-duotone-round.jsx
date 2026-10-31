import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmo8uuw4e.css';
import '../../css/s/sg8r-j2sy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qmo8uuw4e"/><path class="sg8r-j2sy"/></g>`,
		"fallback": "coolicons:shirt-duotone-round",
	});
}

export default Component;
