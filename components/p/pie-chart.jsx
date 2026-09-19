import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlepf_eml.css';
import '../../css/q/qbsvsyi4h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlepf_eml"/><path class="qbsvsyi4h"/>`,
		"fallback": "ep:pie-chart",
	});
}

export default Component;
