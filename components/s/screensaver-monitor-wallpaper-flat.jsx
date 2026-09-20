import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xo549vbik.css';
import '../../css/m/mo1ssfbyc.css';
import '../../css/f/fcud8cp4g.css';
import '../../css/v/vddekprlm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xo549vbik"/><path clip-rule="evenodd" class="mo1ssfbyc"/><path class="fcud8cp4g"/><path clip-rule="evenodd" class="vddekprlm"/></g>`,
		"fallback": "streamline-color:screensaver-monitor-wallpaper-flat",
	});
}

export default Component;
