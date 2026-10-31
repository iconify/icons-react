import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hwsatebiw.css';
import '../../css/o/owpwwqk3u.css';
import '../../css/m/mhvwe6kpv.css';
import '../../css/h/hkv497rkj.css';
import '../../css/b/bdc58e89t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hwsatebiw wm-shadow"/><path class="owpwwqk3u"/><path class="mhvwe6kpv"/><path class="hkv497rkj"/><path class="bdc58e89t"/></g>`,
		"fallback": "withicons-retro:tent",
	});
}

export default Component;
