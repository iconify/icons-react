import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg-ah_bfc.css';
import '../../css/e/e5ufuhb8i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg-ah_bfc"/><path class="e5ufuhb8i"/>`,
		"fallback": "ion:ios-gear-outline",
	});
}

export default Component;
