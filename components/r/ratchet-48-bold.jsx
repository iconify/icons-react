import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsc_0ebep.css';
import '../../css/u/ukrjy-bvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsc_0ebep"/><path class="ukrjy-bvh"/>`,
		"fallback": "energy-icons:ratchet-48-bold",
	});
}

export default Component;
