import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfbtap09s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfbtap09s"/>`,
		"fallback": "noviair:layout",
	});
}

export default Component;
