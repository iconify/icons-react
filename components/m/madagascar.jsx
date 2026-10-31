import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd96iokhh.css';
import '../../css/m/m6ybx_b2r.css';
import '../../css/b/bjmk_0bxk.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd96iokhh"/><path class="m6ybx_b2r"/><path class="bjmk_0bxk"/>`,
		"fallback": "tabler-flags:madagascar",
	});
}

export default Component;
