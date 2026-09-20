import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oyil5ebeb.css';
import '../../css/n/nog5ftwkf.css';
import '../../css/r/r4bf7ebri.css';
import '../../css/w/w0f-hlp2t.css';
import '../../css/n/n4kfu5bmh.css';
import '../../css/t/tnljxhbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oyil5ebeb"/><path class="nog5ftwkf"/><path class="r4bf7ebri"/><circle class="w0f-hlp2t"/><path class="n4kfu5bmh"/><path class="tnljxhbrz"/></g>`,
		"fallback": "solar:music-note-slider-broken",
	});
}

export default Component;
