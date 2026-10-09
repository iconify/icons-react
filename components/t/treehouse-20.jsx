import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyb_tsrjh.css';
import '../../css/k/k8mwnmlmr.css';
import '../../css/b/bxpdewbnx.css';
import '../../css/x/x2g6pju7v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyb_tsrjh"/><path class="k8mwnmlmr"/><path class="bxpdewbnx"/><path class="x2g6pju7v"/>`,
		"fallback": "energy-icons:treehouse-20",
	});
}

export default Component;
