import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rbza6nb1s.css';
import '../../css/e/ezjvqs7tz.css';
import '../../css/z/zbrvpac6b.css';
import '../../css/r/r9gvjrbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rbza6nb1s wm-k"/><path class="ezjvqs7tz wm-a"/><path class="wm-k zbrvpac6b"/><path class="r9gvjrbkq wm-a"/></g>`,
		"fallback": "withicons:rose-bouquet-sketch",
	});
}

export default Component;
