import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn37jeqpc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn37jeqpc"/>`,
		"fallback": "fa6-solid:stamp",
	});
}

export default Component;
