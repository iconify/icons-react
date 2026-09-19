import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h6-dx1i7u.css';
import '../../css/x/x1_l6dbyq.css';
import '../../css/s/s9oud4b4r.css';
import '../../css/m/mmk0geb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h6-dx1i7u"/><path class="x1_l6dbyq"/><path class="s9oud4b4r"/><path class="mmk0geb0u"/></g>`,
		"fallback": "hugeicons:plug-socket",
	});
}

export default Component;
