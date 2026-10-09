import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed2wdwblh.css';
import '../../css/y/y2dquhbch.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed2wdwblh"/><path class="y2dquhbch"/>`,
		"fallback": "energy-icons:rotate-cw-48-bold",
	});
}

export default Component;
