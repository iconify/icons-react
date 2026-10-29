import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/behz2ei-t.css';
import '../../css/v/vu5vvzbot.css';
import '../../css/d/dbtawnhjo.css';
import '../../css/d/diu0kl_dq.css';
import '../../css/a/ayu1l-btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="behz2ei-t wm-deco"/><path class="vu5vvzbot wm-deco"/><path class="dbtawnhjo wm-k"/><path class="diu0kl_dq wm-a"/><path class="ayu1l-btz wm-k"/></g>`,
		"fallback": "withicons:vr-headset-blueprint",
	});
}

export default Component;
