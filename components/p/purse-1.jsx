import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zck7gdbhq.css';
import '../../css/q/qs1on3xma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="zck7gdbhq"/><path class="qs1on3xma"/></g>`,
		"fallback": "streamline-cyber:purse-1",
	});
}

export default Component;
