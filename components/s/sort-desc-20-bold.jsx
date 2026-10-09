import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6l3rqbjj.css';
import '../../css/q/qzqnbpaip.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6l3rqbjj"/><path class="qzqnbpaip"/>`,
		"fallback": "energy-icons:sort-desc-20-bold",
	});
}

export default Component;
