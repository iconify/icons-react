import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/ne_breh1b.css';
import '../../css/d/dc_tsib8a.css';
import '../../css/p/pvryvs9gz.css';
import '../../css/z/zqt9u5oey.css';
import '../../css/o/ookr0gbko.css';
import '../../css/v/v9ikdsbiu.css';
import '../../css/z/zcm7bbbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ne_breh1b wm-deco"/><path class="dc_tsib8a wm-deco"/><path class="pvryvs9gz wm-deco"/><path class="wm-k zqt9u5oey"/><path class="ookr0gbko wm-a"/><path class="v9ikdsbiu wm-k"/><path class="wm-a zcm7bbbwd"/></g>`,
		"fallback": "withicons:pilcrow-blueprint",
	});
}

export default Component;
