import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvg2yvlfb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvg2yvlfb"/>`,
		"fallback": "selfhst:rancher-fleet-light",
	});
}

export default Component;
