import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr1bbeb8o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr1bbeb8o"/>`,
		"fallback": "teenyicons:phonecall-receive-outline",
	});
}

export default Component;
