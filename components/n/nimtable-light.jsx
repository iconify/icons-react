import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8h5bgb-m.css';
import '../../css/k/k8o447kzo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8h5bgb-m"/><path class="k8o447kzo"/>`,
		"fallback": "selfhst:nimtable-light",
	});
}

export default Component;
