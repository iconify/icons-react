import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9p8g4b2w.css';
import '../../css/h/h0cnkwpmi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k9p8g4b2w"/><path class="h0cnkwpmi"/></g>`,
		"fallback": "streamline-color:medical-cross-symbol",
	});
}

export default Component;
