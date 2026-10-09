import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug38o3b8b.css';
import '../../css/p/p5wcu7plu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug38o3b8b"/><path class="p5wcu7plu"/>`,
		"fallback": "energy-icons:watch-48",
	});
}

export default Component;
