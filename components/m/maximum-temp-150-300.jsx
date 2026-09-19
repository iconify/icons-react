import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrnnkbbci.css';

const viewBox = {"width":512,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrnnkbbci"/>`,
		"fallback": "ps:maximum-temp-150-300",
	});
}

export default Component;
