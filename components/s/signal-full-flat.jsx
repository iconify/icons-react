import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bw_mj_yqt.css';
import '../../css/w/wl4hdf6kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bw_mj_yqt"/><path class="wl4hdf6kc"/></g>`,
		"fallback": "streamline-sharp-color:signal-full-flat",
	});
}

export default Component;
