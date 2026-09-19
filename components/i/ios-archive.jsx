import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzlocfotl.css';
import '../../css/k/kx9-9-b3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzlocfotl"/><path class="kx9-9-b3f"/>`,
		"fallback": "ion:ios-archive",
	});
}

export default Component;
