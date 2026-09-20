import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u0sn4oz_l.css';
import '../../css/j/jt_ddwb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u0sn4oz_l"/><path class="jt_ddwb9m"/></g>`,
		"fallback": "streamline-ultimate:video-file-m-4-v",
	});
}

export default Component;
