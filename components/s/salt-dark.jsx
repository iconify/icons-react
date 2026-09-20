import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eonil2bft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eonil2bft"/>`,
		"fallback": "selfhst:salt-dark",
	});
}

export default Component;
