import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/q/q09jc4p4u.css';
import '../../css/l/l9vwkob2d.css';
import '../../css/b/bpwwcmbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="q09jc4p4u"/><path class="l9vwkob2d"/><path class="bpwwcmbnw"/></g>`,
		"fallback": "streamline-cyber:shopping-product",
	});
}

export default Component;
