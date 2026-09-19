import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo-1d-f3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo-1d-f3s"/>`,
		"fallback": "healthicons:pound",
	});
}

export default Component;
