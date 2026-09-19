import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4dvq9b6o.css';
import '../../css/n/n_2kbbb6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4dvq9b6o"/><path class="n_2kbbb6m"/>`,
		"fallback": "ion:md-ice-cream",
	});
}

export default Component;
