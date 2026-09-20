import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aku6d4fqn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aku6d4fqn"/>`,
		"fallback": "selfhst:oracle",
	});
}

export default Component;
