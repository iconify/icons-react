import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdz4u38km.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdz4u38km"/>`,
		"fallback": "energy-icons:minimize-48",
	});
}

export default Component;
