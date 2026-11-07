import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb7lpq_wf.css';
import '../../css/q/qgr7uybef.css';
import '../../css/l/lo2kz2b5c.css';
import '../../css/r/rtrsrablt.css';
import '../../css/o/o-rp_-brq.css';
import '../../css/v/vp3680bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb7lpq_wf"/><path clip-rule="evenodd" class="qgr7uybef"/><path class="lo2kz2b5c"/><path class="rtrsrablt"/><path class="o-rp_-brq"/><path class="vp3680bwq"/>`,
		"fallback": "solar:skateboarding-round-bold",
	});
}

export default Component;
