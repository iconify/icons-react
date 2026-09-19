import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwwxm2b6y.css';
import '../../css/j/j8adrjbzg.css';
import '../../css/k/ken9h11xt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwwxm2b6y"/><path class="j8adrjbzg"/><path class="ken9h11xt"/>`,
		"fallback": "ion:ios-wifi",
	});
}

export default Component;
