import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/q/qou7hzbdu.css';
import '../../css/k/kq66pnvfd.css';
import '../../css/j/jxs7jcb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="qou7hzbdu"/><path class="kq66pnvfd"/><path class="jxs7jcb4k"/></g>`,
		"fallback": "streamline-sharp-color:waving-hand",
	});
}

export default Component;
