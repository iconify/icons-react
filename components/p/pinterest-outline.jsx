import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln9646oal.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln9646oal"/>`,
		"fallback": "teenyicons:pinterest-outline",
	});
}

export default Component;
