import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tssr405-r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tssr405-r"/>`,
		"fallback": "icon-park-outline:unlike",
	});
}

export default Component;
