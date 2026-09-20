import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks8q3gsxp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks8q3gsxp"/>`,
		"fallback": "selfhst:komodo-dark",
	});
}

export default Component;
