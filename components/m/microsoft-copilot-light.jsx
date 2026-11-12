import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu0v_pbkt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu0v_pbkt"/>`,
		"fallback": "selfhst:microsoft-copilot-light",
	});
}

export default Component;
