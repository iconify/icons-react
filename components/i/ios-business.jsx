import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3_381bly.css';
import '../../css/i/iz88rmbke.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3_381bly"/><path class="iz88rmbke"/>`,
		"fallback": "ion:ios-business",
	});
}

export default Component;
