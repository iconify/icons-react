import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyl30e_uw.css';
import '../../css/v/vg4zk5bim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyl30e_uw"/><path class="vg4zk5bim"/>`,
		"fallback": "energy-icons:share-48",
	});
}

export default Component;
