import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pof-r7bip.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pof-r7bip"/>`,
		"fallback": "selfhst:komga-dark",
	});
}

export default Component;
