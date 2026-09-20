import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkdjn0tvw.css';
import '../../css/y/yc5srhlrk.css';
import '../../css/e/eqo2hkbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bkdjn0tvw"/><path class="yc5srhlrk"/><path class="eqo2hkbmw"/></g>`,
		"fallback": "lets-icons:mortarboard-alt-light",
	});
}

export default Component;
