import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kbwwwob-r.css';
import '../../css/x/xaqhq8b1h.css';
import '../../css/h/hxsxwabve.css';
import '../../css/i/inn2k8f_x.css';
import '../../css/j/jwwv_hb7i.css';
import '../../css/b/b_mvcfb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="kbwwwob-r"/><path class="xaqhq8b1h"/><path class="hxsxwabve"/><path class="inn2k8f_x"/></g><path class="jwwv_hb7i"/><path class="b_mvcfb3g"/>`,
		"fallback": "solar:list-collapse-bold-duotone",
	});
}

export default Component;
