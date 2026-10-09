import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si-3bpbzc.css';
import '../../css/y/yck_bwygh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si-3bpbzc"/><path class="yck_bwygh"/>`,
		"fallback": "energy-icons:screwdriver-48",
	});
}

export default Component;
