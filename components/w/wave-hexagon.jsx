import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/e/e-kurgb7l.css';
import '../../css/k/km80xtbph.css';
import '../../css/z/zbj2m4bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="e-kurgb7l"/><path class="km80xtbph"/><path class="zbj2m4bkn"/></g>`,
		"fallback": "streamline-cyber-color:wave-hexagon",
	});
}

export default Component;
