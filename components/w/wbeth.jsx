import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eri20hbvp.css';
import '../../css/f/fjgje8g2t.css';
import '../../css/j/j9rd_gb-v.css';
import '../../css/u/up4ivccyu.css';
import '../../css/c/csg6-mbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eri20hbvp"/><path class="fjgje8g2t"/><path class="j9rd_gb-v"/><path class="up4ivccyu"/><path class="csg6-mbic"/>`,
		"fallback": "token:wbeth",
	});
}

export default Component;
