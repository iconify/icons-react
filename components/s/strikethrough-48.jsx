import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqtu_acra.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqtu_acra"/>`,
		"fallback": "energy-icons:strikethrough-48",
	});
}

export default Component;
