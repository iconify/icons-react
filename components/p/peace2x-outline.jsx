import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qflp29d0g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qflp29d0g"/>`,
		"fallback": "healthicons:peace2x-outline",
	});
}

export default Component;
