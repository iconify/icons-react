import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/q/ql2yy7s3x.css';
import '../../css/p/p7s0-ubxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ql2yy7s3x"/><path class="p7s0-ubxz"/></g>`,
		"fallback": "streamline-cyber:phone-merge",
	});
}

export default Component;
