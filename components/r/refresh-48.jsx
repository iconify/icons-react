import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz1-3kbvd.css';
import '../../css/k/kpheslb2j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz1-3kbvd"/><path class="kpheslb2j"/>`,
		"fallback": "energy-icons:refresh-48",
	});
}

export default Component;
