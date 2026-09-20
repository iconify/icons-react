import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og5h33zgx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og5h33zgx"/>`,
		"fallback": "selfhst:rancher-k3s",
	});
}

export default Component;
