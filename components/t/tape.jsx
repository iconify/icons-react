import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv9gz5bwk.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv9gz5bwk"/>`,
		"fallback": "fa6-solid:tape",
	});
}

export default Component;
