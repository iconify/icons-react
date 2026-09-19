import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9w0_3bdd.css';
import '../../css/g/gyiiqfa7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9w0_3bdd"/><path class="gyiiqfa7o"/>`,
		"fallback": "ion:md-color-fill",
	});
}

export default Component;
