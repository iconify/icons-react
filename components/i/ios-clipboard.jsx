import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxeuqzmsn.css';
import '../../css/z/z1--w73xm.css';
import '../../css/q/q3c4j-bql.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxeuqzmsn"/><path class="z1--w73xm"/><path class="q3c4j-bql"/>`,
		"fallback": "ion:ios-clipboard",
	});
}

export default Component;
