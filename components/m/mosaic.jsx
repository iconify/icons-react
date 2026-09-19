import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtry4db9q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtry4db9q"/>`,
		"fallback": "icon-park-outline:mosaic",
	});
}

export default Component;
