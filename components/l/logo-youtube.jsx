import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb75td1fd.css';
import '../../css/v/vgbkvw-3y.css';
import '../../css/a/a72965b4n.css';
import '../../css/u/uxsm2wbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jb75td1fd"/><path class="vgbkvw-3y"/><path class="a72965b4n"/><path class="uxsm2wbrq"/></g>`,
		"fallback": "tdesign:logo-youtube",
	});
}

export default Component;
