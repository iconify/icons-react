import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2oki1fol.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2oki1fol"/>`,
		"fallback": "cil:rowing",
	});
}

export default Component;
