import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjchplbvr.css';
import '../../css/c/cbd476sji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjchplbvr"/><path class="cbd476sji"/>`,
		"fallback": "cil:newspaper",
	});
}

export default Component;
