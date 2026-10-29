import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cubi7abey.css';
import '../../css/x/x99v8ybav.css';
import '../../css/i/iz2h51hrs.css';
import '../../css/f/ffe6717hy.css';
import '../../css/l/lkq-umkya.css';
import '../../css/l/lvtq943uu.css';
import '../../css/l/lqlwayb9u.css';
import '../../css/b/b_cf1ybyd.css';
import '../../css/c/ck0cmebah.css';
import '../../css/b/bu5l-3bwq.css';
import '../../css/i/iu73xs29t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cubi7abey wm-shadow"/><path class="wm-k x99v8ybav"/><path class="iz2h51hrs wm-k"/><path class="ffe6717hy wm-k"/><path class="lkq-umkya wm-k"/><path class="lvtq943uu wm-shine"/><path class="lqlwayb9u wm-k"/><path class="b_cf1ybyd wm-a"/><path class="ck0cmebah wm-a"/><path class="bu5l-3bwq wm-a"/><path class="iu73xs29t wm-a"/>`,
		"fallback": "withicons-plush:message-circle-more",
	});
}

export default Component;
