import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psoheuv8a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="psoheuv8a"/>`,
		"fallback": "healthicons:poison-outline",
	});
}

export default Component;
