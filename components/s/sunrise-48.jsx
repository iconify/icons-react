import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-taz-bdu.css';
import '../../css/f/ftnl01noy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-taz-bdu"/><path class="ftnl01noy"/>`,
		"fallback": "energy-icons:sunrise-48",
	});
}

export default Component;
