import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzy0f__1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzy0f__1h"/>`,
		"fallback": "healthicons:refused",
	});
}

export default Component;
