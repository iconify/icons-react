import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnnmw2ayq.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnnmw2ayq"/>`,
		"fallback": "medical-icon:restaurant",
	});
}

export default Component;
