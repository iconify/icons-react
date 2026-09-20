import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeyw3hn-y.css';
import '../../css/f/fdorp31hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeyw3hn-y"/><path class="fdorp31hk"/>`,
		"fallback": "nrk:tilgjengelighet",
	});
}

export default Component;
