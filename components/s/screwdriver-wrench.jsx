import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf5vfgp4d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf5vfgp4d"/>`,
		"fallback": "fa7-solid:screwdriver-wrench",
	});
}

export default Component;
