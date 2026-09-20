import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s86ys5bmu.css';
import '../../css/i/i4f0-3bts.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="s86ys5bmu"/><path class="i4f0-3bts"/></g>`,
		"fallback": "streamline:shopping-bag-suitcase-1-product-business-briefcase",
	});
}

export default Component;
