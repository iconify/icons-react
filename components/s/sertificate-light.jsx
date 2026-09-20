import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/j27ze1b2l.css';
import '../../css/j/jdxgfcblx.css';
import '../../css/f/fh-xrsb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="j27ze1b2l"/><circle class="jdxgfcblx"/><path class="fh-xrsb1t"/></g>`,
		"fallback": "lets-icons:sertificate-light",
	});
}

export default Component;
