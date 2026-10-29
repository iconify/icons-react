import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ozk_p6b9e.css';
import '../../css/u/u677jzbdb.css';
import '../../css/a/aoiveu2rv.css';
import '../../css/i/iyexf9bri.css';
import '../../css/r/re6gqqbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ozk_p6b9e"/><path class="u677jzbdb wm-a"/><path class="aoiveu2rv wm-a"/><path class="iyexf9bri"/><path class="re6gqqbct wm-a"/></g>`,
		"fallback": "withicons:ship-duo",
	});
}

export default Component;
