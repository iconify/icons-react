import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/e/efm26jbnu.css';
import '../../css/r/rlolyac1m.css';
import '../../css/a/a0hdqrbyg.css';
import '../../css/v/v3a8pmbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="efm26jbnu"/><path class="rlolyac1m"/><path class="a0hdqrbyg"/><path class="v3a8pmbdy"/></g>`,
		"fallback": "streamline-cyber-color:report-problem-warning-hexagon",
	});
}

export default Component;
