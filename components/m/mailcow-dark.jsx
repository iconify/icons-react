import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uotgo6lhg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uotgo6lhg"/>`,
		"fallback": "selfhst:mailcow-dark",
	});
}

export default Component;
