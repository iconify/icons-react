import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xl9wbnx-v.css';
import '../../css/b/bm9t00_7o.css';
import '../../css/o/oi3yrsxuo.css';
import '../../css/o/obqo-b0uq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="xl9wbnx-v"/><rect class="bm9t00_7o"/><path class="oi3yrsxuo"/><path class="obqo-b0uq"/></g>`,
		"fallback": "icon-park:reverse-operation-in",
	});
}

export default Component;
