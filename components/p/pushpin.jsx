import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuplpleng.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuplpleng"/>`,
		"fallback": "icon-park-outline:pushpin",
	});
}

export default Component;
