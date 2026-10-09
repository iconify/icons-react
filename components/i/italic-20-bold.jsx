import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k40yvq1wf.css';
import '../../css/e/e1pitrb3n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k40yvq1wf"/><path class="e1pitrb3n"/>`,
		"fallback": "energy-icons:italic-20-bold",
	});
}

export default Component;
