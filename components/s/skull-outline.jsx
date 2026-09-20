import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8-qn0b6j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8-qn0b6j"/>`,
		"fallback": "teenyicons:skull-outline",
	});
}

export default Component;
