import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/y/yd-qqmb8w.css';
import '../../css/o/oh7e6vbbn.css';
import '../../css/a/a0hdqrbyg.css';
import '../../css/u/u93_3bbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="yd-qqmb8w"/><path class="oh7e6vbbn"/><path class="a0hdqrbyg"/><path class="u93_3bbvd"/></g>`,
		"fallback": "streamline-cyber-color:radioactive-hexagon",
	});
}

export default Component;
