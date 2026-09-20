import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p106ycbtt.css';
import '../../css/v/vq20y5lfc.css';
import '../../css/p/pf55n9k4q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p106ycbtt"/><path clip-rule="evenodd" class="vq20y5lfc"/><path class="pf55n9k4q"/></g>`,
		"fallback": "streamline-color:user-multiple-group",
	});
}

export default Component;
