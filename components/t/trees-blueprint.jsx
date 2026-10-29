import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/idv0xeg7q.css';
import '../../css/o/odkrajbjk.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/j/j06zh6vfz.css';
import '../../css/w/wyt9irbkv.css';
import '../../css/n/ndwp04m_t.css';
import '../../css/h/h1yu4hbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="idv0xeg7q wm-deco"/><path class="odkrajbjk wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="j06zh6vfz wm-k"/><path class="wm-a wyt9irbkv"/><path class="ndwp04m_t wm-k"/><path class="h1yu4hbyz wm-a"/></g>`,
		"fallback": "withicons:trees-blueprint",
	});
}

export default Component;
