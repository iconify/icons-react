import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/j9yetaccg.css';
import '../../css/n/nn-2x7zrv.css';
import '../../css/s/sfc0dobyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="j9yetaccg"/><path class="nn-2x7zrv"/><path class="sfc0dobyu"/></g>`,
		"fallback": "streamline-cyber:store-sale",
	});
}

export default Component;
