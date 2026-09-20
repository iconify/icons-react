import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_c0vp4vp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_c0vp4vp"/>`,
		"fallback": "teenyicons:paws-outline",
	});
}

export default Component;
