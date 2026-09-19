import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkwely5ns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkwely5ns"/>`,
		"fallback": "icon-park-outline:magic",
	});
}

export default Component;
