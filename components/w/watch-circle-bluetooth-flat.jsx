import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/up-ebhb1o.css';
import '../../css/s/sx7s71yrk.css';
import '../../css/v/vbg06qk5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="up-ebhb1o"/><path clip-rule="evenodd" class="sx7s71yrk"/><path clip-rule="evenodd" class="vbg06qk5i"/></g>`,
		"fallback": "streamline-sharp-color:watch-circle-bluetooth-flat",
	});
}

export default Component;
