import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntyet9bif.css';
import '../../css/z/ze3stvb-e.css';
import '../../css/h/hwz8extfr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ntyet9bif"/><path class="ze3stvb-e"/><path class="hwz8extfr"/></g>`,
		"fallback": "streamline-color:wallet-purse",
	});
}

export default Component;
