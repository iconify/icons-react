import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec55w-tet.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec55w-tet"/>`,
		"fallback": "fa6-brands:watchman-monitoring",
	});
}

export default Component;
