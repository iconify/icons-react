import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2hru890i.css';
import '../../css/g/gzya_schc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w2hru890i"/><path clip-rule="evenodd" class="gzya_schc"/></g>`,
		"fallback": "streamline-flex-color:treasure-chest-flat",
	});
}

export default Component;
