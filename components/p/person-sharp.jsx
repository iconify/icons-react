import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk36stb1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk36stb1d"/>`,
		"fallback": "famicons:person-sharp",
	});
}

export default Component;
