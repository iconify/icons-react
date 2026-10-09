import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh7ndob2m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh7ndob2m"/>`,
		"fallback": "energy-icons:list-checks-48-bold",
	});
}

export default Component;
