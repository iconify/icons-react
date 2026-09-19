import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fde1h0bmj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fde1h0bmj"/>`,
		"fallback": "healthicons:virus-research-alt2x-outline",
	});
}

export default Component;
