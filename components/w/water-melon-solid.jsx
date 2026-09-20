import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhh-a4b7j.css';
import '../../css/y/yyzofeeqd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dhh-a4b7j"/><path class="yyzofeeqd"/>`,
		"fallback": "streamline-plump:water-melon-solid",
	});
}

export default Component;
