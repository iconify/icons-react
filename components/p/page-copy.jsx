import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfwb2bob.css';
import '../../css/q/qvf68znnu.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezfwb2bob"/><path class="qvf68znnu"/>`,
		"fallback": "foundation:page-copy",
	});
}

export default Component;
