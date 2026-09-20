import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wsk2a6bxc.css';
import '../../css/m/mj22p1w_u.css';
import '../../css/r/rxdhtxbdw.css';
import '../../css/i/iyuamcbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wsk2a6bxc"/><path class="mj22p1w_u"/><path class="rxdhtxbdw"/><path class="iyuamcbxf"/></g>`,
		"fallback": "streamline-sharp-color:pen-types-flat",
	});
}

export default Component;
