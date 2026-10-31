import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wziix9tcx.css';
import '../../css/m/m84i73blh.css';
import '../../css/q/qian_zhom.css';
import '../../css/l/l8ycu7gxa.css';
import '../../css/j/jam4w2b9t.css';
import '../../css/j/jvocpgb8k.css';
import '../../css/t/t6qgiacyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow wziix9tcx"/><path class="m84i73blh wm-s"/><path class="qian_zhom wm-shadow"/><path class="l8ycu7gxa"/><path class="jam4w2b9t wm-s"/><path class="jvocpgb8k wm-s"/><path class="t6qgiacyu wm-s"/></g>`,
		"fallback": "withicons-brutal:text-sparkles",
	});
}

export default Component;
