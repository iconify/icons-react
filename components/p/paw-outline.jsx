import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixn_37yhu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixn_37yhu"/>`,
		"fallback": "famicons:paw-outline",
	});
}

export default Component;
