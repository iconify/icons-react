import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygo23sqro.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygo23sqro"/>`,
		"fallback": "energy-icons:list-48",
	});
}

export default Component;
