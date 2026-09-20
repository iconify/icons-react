import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/aq1am_bjl.css';
import '../../css/s/s9xr-tl4r.css';
import '../../css/z/zz_7ib29k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="aq1am_bjl"/><path class="s9xr-tl4r"/><path class="zz_7ib29k"/></g>`,
		"fallback": "streamline-plump:mail-setting",
	});
}

export default Component;
