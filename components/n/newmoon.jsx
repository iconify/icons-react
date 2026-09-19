import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz-ie_bjg.css';
import '../../css/f/f9id0oq2j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz-ie_bjg"/><path class="f9id0oq2j"/>`,
		"fallback": "fxemoji:newmoon",
	});
}

export default Component;
