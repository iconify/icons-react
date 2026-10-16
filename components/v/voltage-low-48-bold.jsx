import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9leiv1ic.css';
import '../../css/n/ndcyp2oof.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9leiv1ic"/><path class="ndcyp2oof"/>`,
		"fallback": "energy-icons:voltage-low-48-bold",
	});
}

export default Component;
