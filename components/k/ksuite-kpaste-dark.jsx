import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k63sfyide.css';
import '../../css/x/xgxd9qb_o.css';
import '../../css/z/zuvme35ny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k63sfyide"/><path class="xgxd9qb_o"/><path class="zuvme35ny"/>`,
		"fallback": "selfhst:ksuite-kpaste-dark",
	});
}

export default Component;
