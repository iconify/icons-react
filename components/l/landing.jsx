import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_s9z448p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_s9z448p"/>`,
		"fallback": "icon-park-outline:landing",
	});
}

export default Component;
