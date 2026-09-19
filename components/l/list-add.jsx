import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drltkhb0u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drltkhb0u"/>`,
		"fallback": "icon-park-outline:list-add",
	});
}

export default Component;
