import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tublxl2-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tublxl2-k"/>`,
		"fallback": "ix:select-alt",
	});
}

export default Component;
