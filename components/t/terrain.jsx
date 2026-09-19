import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peab942ah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peab942ah"/>`,
		"fallback": "cil:terrain",
	});
}

export default Component;
