import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/e/efm26jbnu.css';
import '../../css/f/f8yvjesfo.css';
import '../../css/a/a0hdqrbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="efm26jbnu"/><path class="f8yvjesfo"/><path class="a0hdqrbyg"/></g>`,
		"fallback": "streamline-cyber-color:upload-download-traffic-data-transfer-hexagon",
	});
}

export default Component;
