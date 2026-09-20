import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6fzr233t.css';
import '../../css/x/xe8h0abgh.css';
import '../../css/q/qkg71bvse.css';
import '../../css/j/j_9ap0qlq.css';
import '../../css/x/xm-ksac4e.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6fzr233t"/><path class="xe8h0abgh"/><path class="qkg71bvse"/><path class="j_9ap0qlq"/><path class="xm-ksac4e"/>`,
		"fallback": "lineicons:rss-feed",
	});
}

export default Component;
