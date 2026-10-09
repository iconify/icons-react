import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdtvt3bkl.css';
import '../../css/b/bypdiev1s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdtvt3bkl"/><path class="bypdiev1s"/>`,
		"fallback": "energy-icons:sailboat-48-bold",
	});
}

export default Component;
