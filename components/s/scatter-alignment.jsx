import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt9kaib0k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt9kaib0k"/>`,
		"fallback": "icon-park-outline:scatter-alignment",
	});
}

export default Component;
