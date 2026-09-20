import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/o/oj9mg6sxz.css';
import '../../css/y/y-ektr4tz.css';
import '../../css/e/erwqvfa4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="oj9mg6sxz"/><path class="y-ektr4tz"/><path class="erwqvfa4h"/></g>`,
		"fallback": "streamline-cyber-color:temperature-fahrenheit",
	});
}

export default Component;
