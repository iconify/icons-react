import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/ott3dub1u.css';
import '../../css/e/eb2qabupy.css';
import '../../css/g/g9oyvc35j.css';
import '../../css/y/yln9nzbbc.css';
import '../../css/y/ybxisx4iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ott3dub1u wm-deco"/><path class="eb2qabupy wm-deco"/><circle class="g9oyvc35j wm-k"/><path class="wm-a yln9nzbbc"/><path class="wm-a ybxisx4iz"/></g>`,
		"fallback": "withicons:rss-blueprint",
	});
}

export default Component;
