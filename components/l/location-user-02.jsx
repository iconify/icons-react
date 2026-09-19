import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d4bpu0bvk.css';
import '../../css/j/jrp9cab6c.css';
import '../../css/j/jh7fhobqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d4bpu0bvk"/><path class="jrp9cab6c"/><path class="jh7fhobqh"/></g>`,
		"fallback": "hugeicons:location-user-02",
	});
}

export default Component;
