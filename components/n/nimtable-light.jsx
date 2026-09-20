import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8h5bgb-m.css';
import '../../css/n/n_xpcc89w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8h5bgb-m"/><path class="n_xpcc89w"/>`,
		"fallback": "selfhst:nimtable-light",
	});
}

export default Component;
