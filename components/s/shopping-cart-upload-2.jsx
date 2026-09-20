import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/ieh6phv1s.css';
import '../../css/u/ulfbdxuqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ieh6phv1s"/><path class="ulfbdxuqq"/></g>`,
		"fallback": "streamline-cyber:shopping-cart-upload-2",
	});
}

export default Component;
