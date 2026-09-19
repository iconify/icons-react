import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtbrppwwj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtbrppwwj"/>`,
		"fallback": "icon-park-outline:press",
	});
}

export default Component;
