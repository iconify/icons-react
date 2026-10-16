import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/v/vo0ahhzyr.css';
import '../../css/m/mrpvzrb1u.css';
import '../../css/h/h-ajfgb5o.css';
import '../../css/q/qxqrehbei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="vo0ahhzyr"/><path class="mrpvzrb1u"/><path class="h-ajfgb5o"/></g><path class="qxqrehbei"/>`,
		"fallback": "flag:sn-1x1",
	});
}

export default Component;
