import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pktuq_lkk.css';
import '../../css/n/n1bc5gv3h.css';
import '../../css/l/l-h20ibdt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pktuq_lkk"/><path class="n1bc5gv3h"/><path class="l-h20ibdt"/>`,
		"fallback": "energy-icons:rowing-48",
	});
}

export default Component;
