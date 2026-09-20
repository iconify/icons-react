import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xaka1xbsw.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/r/r5-oiua1r.css';
import '../../css/a/aa5fno6lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xaka1xbsw"/><g class="av3m8fbrw"><path class="r5-oiua1r"/><path class="aa5fno6lk"/></g></g>`,
		"fallback": "tdesign:usb",
	});
}

export default Component;
