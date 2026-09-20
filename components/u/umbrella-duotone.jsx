import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vv8u-bcmu.css';
import '../../css/w/wlttq6b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vv8u-bcmu"/><path class="wlttq6b8t"/></g>`,
		"fallback": "keyline-icons:umbrella-duotone",
	});
}

export default Component;
