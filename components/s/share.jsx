import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bflm40lpa.css';
import '../../css/z/zom5rhbrx.css';
import '../../css/p/p7fropb0k.css';
import '../../css/u/uma4_ub-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="bflm40lpa"/><path class="wm-shine zom5rhbrx"/><path class="p7fropb0k"/><path class="uma4_ub-b wm-deco"/></g>`,
		"fallback": "withicons-kawaii:share",
	});
}

export default Component;
