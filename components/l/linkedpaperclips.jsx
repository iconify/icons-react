import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmo3fgbyk.css';
import '../../css/y/yzi7645on.css';
import '../../css/b/b0actyg2j.css';
import '../../css/m/m15jr1ble.css';
import '../../css/f/fldvjacjt.css';
import '../../css/w/wz6ab6xkk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmo3fgbyk"/><path class="yzi7645on"/><path class="b0actyg2j"/><path class="m15jr1ble"/><path class="fldvjacjt"/><path class="wz6ab6xkk"/>`,
		"fallback": "fxemoji:linkedpaperclips",
	});
}

export default Component;
