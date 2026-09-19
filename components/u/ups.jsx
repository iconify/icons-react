import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7llo2a6w.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7llo2a6w"/>`,
		"fallback": "fa6-brands:ups",
	});
}

export default Component;
