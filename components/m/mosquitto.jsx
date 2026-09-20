import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz0w159ze.css';
import '../../css/k/k5b4rgmdr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz0w159ze"/><path class="k5b4rgmdr"/>`,
		"fallback": "selfhst:mosquitto",
	});
}

export default Component;
