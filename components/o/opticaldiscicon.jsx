import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4lt3lb1x.css';
import '../../css/i/i6r1xobqq.css';
import '../../css/e/e2kroochg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4lt3lb1x"/><path class="i6r1xobqq"/><path class="e2kroochg"/>`,
		"fallback": "fxemoji:opticaldiscicon",
	});
}

export default Component;
