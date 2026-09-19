import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e7171fwvi.css';
import '../../css/b/btyewe-mk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e7171fwvi"/><path class="btyewe-mk"/></g>`,
		"fallback": "hugeicons:kayak",
	});
}

export default Component;
