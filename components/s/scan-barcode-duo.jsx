import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mek1j-bvd.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/x/x8izv9k1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mek1j-bvd wm-a"/><path class="l9lv5_bcf"/><path class="wm-a x8izv9k1w"/></g>`,
		"fallback": "withicons:scan-barcode-duo",
	});
}

export default Component;
