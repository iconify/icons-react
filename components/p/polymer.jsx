import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prkc-3yml.css';

const viewBox = {"width":496,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prkc-3yml"/>`,
		"fallback": "zmdi:polymer",
	});
}

export default Component;
