import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aft-_hbdu.css';
import '../../css/i/i-s48fubu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aft-_hbdu"/><path class="i-s48fubu"/>`,
		"fallback": "energy-icons:soldering-iron-48-bold",
	});
}

export default Component;
