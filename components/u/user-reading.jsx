import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqzjg74_k.css';
import '../../css/x/xf-y1rnlx.css';
import '../../css/i/is60ubtfq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lqzjg74_k"/><path class="xf-y1rnlx"/><path clip-rule="evenodd" class="is60ubtfq"/>`,
		"fallback": "ix:user-reading",
	});
}

export default Component;
