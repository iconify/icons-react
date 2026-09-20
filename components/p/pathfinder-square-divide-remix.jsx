import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv931mb5m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pv931mb5m"/>`,
		"fallback": "streamline-plump:pathfinder-square-divide-remix",
	});
}

export default Component;
