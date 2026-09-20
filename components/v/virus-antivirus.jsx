import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cax47xbmx.css';
import '../../css/p/pzw-3t-fx.css';
import '../../css/p/ppw3h9j-n.css';
import '../../css/w/w491lmbdv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cax47xbmx"/><path class="pzw-3t-fx"/><path class="ppw3h9j-n"/><path class="w491lmbdv"/></g>`,
		"fallback": "streamline-color:virus-antivirus",
	});
}

export default Component;
