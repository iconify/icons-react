import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u98qkxxfj.css';
import '../../css/y/yy95vwqvp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u98qkxxfj"/><path class="yy95vwqvp"/>`,
		"fallback": "famicons:medkit-sharp",
	});
}

export default Component;
