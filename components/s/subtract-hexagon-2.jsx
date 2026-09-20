import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/m/muoa8lgor.css';
import '../../css/a/a0hdqrbyg.css';
import '../../css/q/qfsxdubtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="muoa8lgor"/><path class="a0hdqrbyg"/><path class="qfsxdubtq"/></g>`,
		"fallback": "streamline-cyber-color:subtract-hexagon-2",
	});
}

export default Component;
