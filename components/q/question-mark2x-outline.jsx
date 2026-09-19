import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl3zb4bty.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vl3zb4bty"/>`,
		"fallback": "healthicons:question-mark2x-outline",
	});
}

export default Component;
