import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvq6ijb7t.css';
import '../../css/r/rzvwk-bwy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvq6ijb7t"/><path class="rzvwk-bwy"/>`,
		"fallback": "selfhst:mirotalk-dark",
	});
}

export default Component;
