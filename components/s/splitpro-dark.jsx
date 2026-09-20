import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdfqr6ksx.css';
import '../../css/t/tqdn9_b8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdfqr6ksx"/><path class="tqdn9_b8f"/>`,
		"fallback": "selfhst:splitpro-dark",
	});
}

export default Component;
